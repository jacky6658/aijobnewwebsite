'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

const faqData: FAQItem[] = [
  {
    category: '服務相關',
    question: 'AIJOB 提供哪些服務？',
    answer: 'AIJOB 提供客製化 AI 系統開發、AI 應用培訓課程、AI 工具庫和智能體應用，以及技術諮詢和支援服務。我們可以根據您的需求，量身打造專屬的 AI 解決方案。',
  },
  {
    category: '服務相關',
    question: '開發一個 AI 系統需要多長時間？',
    answer: '開發時間取決於專案的複雜度和需求。簡單的 AI 應用可能只需要 2-4 週，而複雜的企業級系統可能需要 2-6 個月。我們會在專案開始前提供詳細的時程規劃。',
  },
  {
    category: '服務相關',
    question: '你們支援哪些產業？',
    answer: '我們的 AI 解決方案適用於各行各業，包括製造業、服務業、零售業、科技業、金融業、醫療業等。無論您的產業為何，我們都能提供適合的 AI 應用方案。',
  },
  {
    category: '培訓課程',
    question: '課程適合初學者嗎？',
    answer: '是的，我們提供從入門到進階的完整課程體系。入門課程專為沒有 AI 基礎的學員設計，會從基礎概念開始，手把手教您掌握 AI 應用的核心技能。',
  },
  {
    category: '培訓課程',
    question: '課程是線上還是線下？',
    answer: '我們提供線上課程，讓您可以在任何時間、任何地點學習。所有課程都包含完整的影片教學、講義和練習題，並提供學員專屬社群支援。',
  },
  {
    category: '培訓課程',
    question: '完成課程後會獲得證書嗎？',
    answer: '完成課程並通過考核的學員，可以獲得 AIJOB 頒發的結業證書。證書可以作為您 AI 應用能力的證明，有助於職涯發展。',
  },
  {
    category: '技術支援',
    question: '提供技術支援嗎？',
    answer: '是的，我們為所有客戶提供完整的技術支援服務。包括系統維護、問題排除、功能更新等。我們有專業的技術團隊隨時為您提供協助。',
  },
  {
    category: '技術支援',
    question: '系統需要什麼技術環境？',
    answer: '我們的 AI 系統設計為雲端架構，通常不需要客戶端安裝特殊軟體。只要能夠連上網路，透過瀏覽器即可使用。我們會根據您的需求提供客製化的部署方案。',
  },
  {
    category: '價格與付款',
    question: '如何收費？',
    answer: '收費方式根據服務類型而異。AI 系統開發採用專案報價，培訓課程有固定價格，工具使用則有月費或年費方案。請聯繫我們獲取詳細的報價資訊。',
  },
  {
    category: '價格與付款',
    question: '支援哪些付款方式？',
    answer: '我們支援多種付款方式，包括銀行轉帳、信用卡付款、支票等。大型專案可以分期付款，詳細方案請與我們聯繫討論。',
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('全部');

  const categories = ['全部', ...Array.from(new Set(faqData.map(item => item.category)))];

  const filteredFAQs = selectedCategory === '全部'
    ? faqData
    : faqData.filter(item => item.category === selectedCategory);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        {/* 分類篩選 */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setOpenIndex(null);
              }}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white shadow-lg'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* FAQ 列表 */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-2xl overflow-hidden transition-all hover:border-indigo-300 hover:shadow-lg"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left bg-white hover:bg-slate-50 transition-colors"
              >
                <div className="flex-1 pr-4">
                  <span className="text-xs font-black text-indigo-600 uppercase tracking-wider mb-2 block">
                    {faq.category}
                  </span>
                  <h3 className="text-lg font-black text-slate-900">{faq.question}</h3>
                </div>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-slate-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-slate-400" />
                  )}
                </div>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 pt-0 bg-slate-50">
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 沒有找到答案 */}
        <div className="mt-16 text-center p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
          <h3 className="text-xl font-black text-slate-900 mb-3">還有其他問題？</h3>
          <p className="text-slate-600 mb-6">
            如果這裡沒有您想找的答案，歡迎直接聯繫我們，我們很樂意為您解答。
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-xl font-black hover:bg-indigo-700 transition-all shadow-lg active:scale-95"
          >
            聯絡我們
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
