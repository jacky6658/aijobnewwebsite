'use client';

import React, { useEffect, useRef } from 'react';
import { FileText } from 'lucide-react';

interface FilloutFormProps {
  formId: string;
  title: string;
  description?: string;
  buttonText?: string;
}

const FilloutForm: React.FC<FilloutFormProps> = ({ formId, title, description, buttonText = '填寫問卷' }) => {
  const hiddenContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // 載入 Fillout 腳本（如果尚未載入）
    const existingScript = document.querySelector('script[src="https://server.fillout.com/embed/v1/"]');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://server.fillout.com/embed/v1/';
      script.async = true;
      document.body.appendChild(script);
    }

    // 等待 Fillout 腳本載入完成後初始化
    const initFillout = () => {
      if (hiddenContainerRef.current && (window as any).Fillout) {
        // Fillout 會自動處理 popup 類型的嵌入
        // 我們使用隱藏的容器來初始化 Fillout
      }
    };

    // 檢查 Fillout 是否已載入
    if ((window as any).Fillout) {
      initFillout();
    } else {
      // 等待腳本載入
      const checkFillout = setInterval(() => {
        if ((window as any).Fillout) {
          initFillout();
          clearInterval(checkFillout);
        }
      }, 100);

      // 10 秒後停止檢查
      setTimeout(() => clearInterval(checkFillout), 10000);
    }
  }, []);

  const handleButtonClick = () => {
    // 方法 1: 嘗試找到 Fillout 自動生成的按鈕並觸發
    if (hiddenContainerRef.current) {
      const filloutButton = hiddenContainerRef.current.querySelector('button') as HTMLButtonElement;
      if (filloutButton) {
        filloutButton.click();
        return;
      }
    }

    // 方法 2: 使用 Fillout API 直接打開彈窗
    if ((window as any).Fillout) {
      try {
        // 嘗試使用 Fillout 的 open 方法
        if (typeof (window as any).Fillout.open === 'function') {
          (window as any).Fillout.open(formId, {
            embedType: 'popup',
            popupSize: 'medium',
          });
          return;
        }
      } catch (e) {
        console.log('Fillout.open not available');
      }
    }

    // 方法 3: 創建臨時的 Fillout 元素並觸發
    const tempDiv = document.createElement('div');
    tempDiv.setAttribute('data-fillout-id', formId);
    tempDiv.setAttribute('data-fillout-embed-type', 'popup');
    tempDiv.setAttribute('data-fillout-popup-size', 'medium');
    tempDiv.style.display = 'none';
    document.body.appendChild(tempDiv);

    // 等待 Fillout 初始化後觸發
    setTimeout(() => {
      const tempButton = tempDiv.querySelector('button') as HTMLButtonElement;
      if (tempButton) {
        tempButton.click();
      }
      document.body.removeChild(tempDiv);
    }, 100);
  };

  // 如果 formId 包含「請提供」，顯示提示訊息
  if (formId.includes('請提供')) {
    return (
      <div className="space-y-4">
        <div>
          <h3 className="text-xl font-black text-slate-900 mb-2">{title}</h3>
          {description && (
            <p className="text-slate-600 text-sm leading-relaxed mb-4">{description}</p>
          )}
        </div>
        <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-amber-700 text-sm">
          ⚠️ 此問卷尚未設定 Form ID，請聯繫開發人員提供。
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-3 h-full flex flex-col">
      {/* 隱藏的 Fillout 容器，用於初始化但不顯示 */}
      <div
        ref={hiddenContainerRef}
        data-fillout-id={formId}
        data-fillout-embed-type="popup"
        data-fillout-dynamic-resize
        data-fillout-inherit-parameters
        data-fillout-popup-size="medium"
        className="fillout-form"
        style={{ display: 'none', visibility: 'hidden', position: 'absolute', left: '-9999px' }}
        aria-hidden="true"
      />

      <div className="flex-grow">
        <h3 className="text-lg font-black text-slate-900 mb-2">{title}</h3>
        {description && (
          <p className="text-slate-600 text-xs leading-relaxed">{description}</p>
        )}
      </div>
      
      {/* 自定義設計的按鈕 */}
      <button
        ref={buttonRef}
        type="button"
        onClick={handleButtonClick}
        className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl font-bold text-sm transition-all shadow-lg hover:shadow-xl active:scale-95 flex items-center justify-center gap-2 mt-auto"
      >
        <FileText className="w-4 h-4" />
        {buttonText}
      </button>
    </div>
  );
};

export default FilloutForm;
