'use client';

import React, { useState, useRef, useEffect } from 'react';
import { ChatMessage } from '../types';
import { MessageCircle, X, Send, Bot, ExternalLink } from 'lucide-react';

const AIAgent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: '您好！我是您的 AIJob 小助手。不論您是在尋找適合的 AI 工具、想開發客製化智能體，或是想參加實戰課程，我都能為您提供建議。請教您今天有什麼需求嗎？' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          history: messages,
          message: userMsg,
        }),
      });

      const data = await res.json();
      
      if (res.ok) {
        setMessages(prev => [...prev, { role: 'model', text: data.text, hasLinks: data.hasLinks }]);
      } else {
        setMessages(prev => [...prev, { role: 'model', text: data.message || '發生錯誤，請稍後再試。', hasLinks: true }]);
      }
    } catch (error) {
      console.error('Chat error:', error);
      setMessages(prev => [...prev, { role: 'model', text: '連線錯誤，請稍後再試。', hasLinks: false }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      {/* Chat Window */}
      {isOpen && (
        <div className="absolute bottom-24 right-0 w-80 sm:w-96 bg-white rounded-[2rem] shadow-2xl border border-slate-200 overflow-hidden flex flex-col h-[550px] animate-in fade-in slide-in-from-bottom-8 duration-300">
          <div className="bg-indigo-600 p-6 text-white flex justify-between items-center shadow-lg shadow-indigo-600/20">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Bot className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm">AIJob 小助手</h4>
                <p className="text-[10px] text-indigo-100 uppercase tracking-widest font-black">AIJob Assistant</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/10 p-2 rounded-full transition-colors" aria-label="Close chat">
              <X className="w-5 h-5" />
            </button>
          </div>

          <div ref={scrollRef} className="flex-grow overflow-y-auto p-6 space-y-6 bg-slate-50/50">
            {messages.map((msg, idx) => {
              // 提取訊息中的連結
              const urlRegex = /(https?:\/\/[^\s]+)/g;
              const hasLinks = (msg as any).hasLinks || urlRegex.test(msg.text);
              
              // 解析 Markdown 格式的文字（處理粗體和連結）
              const parseMessage = (text: string): (string | { type: 'link'; url: string; text: string } | { type: 'bold'; text: string })[] => {
                const parts: (string | { type: 'link'; url: string; text: string } | { type: 'bold'; text: string })[] = [];
                
                // 先處理 Markdown 連結格式 [文字](URL)
                const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^\)]+)\)/g;
                const markdownLinks: Array<{ index: number; length: number; text: string; url: string }> = [];
                let mdMatch;
                
                while ((mdMatch = markdownLinkRegex.exec(text)) !== null) {
                  markdownLinks.push({
                    index: mdMatch.index,
                    length: mdMatch[0].length,
                    text: mdMatch[1],
                    url: mdMatch[2]
                  });
                }
                
                // 處理普通 URL（排除已經在 Markdown 連結中的）
                const urlRegex = /(https?:\/\/[^\s\)\]\.,;!?]+)/g;
                let match: RegExpExecArray | null;
                const linkMatches: Array<{ index: number; url: string; endIndex: number }> = [];
                
                while ((match = urlRegex.exec(text)) !== null) {
                  // 檢查這個 URL 是否已經在 Markdown 連結中
                  const isInMarkdownLink = markdownLinks.some(md => 
                    match!.index >= md.index && match!.index < md.index + md.length
                  );
                  
                  if (!isInMarkdownLink) {
                    let url = match[0].trim();
                    // 移除 URL 末尾的常見標點符號
                    url = url.replace(/[.,;!?]+$/, '');
                    // 確保 URL 是完整的
                    if (url.startsWith('http://') || url.startsWith('https://')) {
                      linkMatches.push({ 
                        index: match.index, 
                        url,
                        endIndex: match.index + match[0].length
                      });
                    }
                  }
                }
                
                // 將 Markdown 連結轉換為普通連結格式
                markdownLinks.forEach(md => {
                  linkMatches.push({
                    index: md.index,
                    url: md.url,
                    endIndex: md.index + md.length
                  });
                });
                
                // 處理粗體標記
                const boldRegex = /\*\*([^*]+)\*\*/g;
                const boldMatches: Array<{ index: number; length: number; text: string }> = [];
                let boldMatch;
                
                while ((boldMatch = boldRegex.exec(text)) !== null) {
                  boldMatches.push({
                    index: boldMatch.index,
                    length: boldMatch[0].length,
                    text: boldMatch[1]
                  });
                }
                
                // 合併所有匹配項並排序
                const allMatches: Array<{ index: number; type: 'link' | 'bold'; url?: string; text?: string; length?: number; endIndex?: number }> = [
                  ...linkMatches.map(m => ({ ...m, type: 'link' as const })),
                  ...boldMatches.map(m => ({ ...m, type: 'bold' as const }))
                ].sort((a, b) => a.index - b.index);
                
                let currentIndex = 0;
                
                for (const match of allMatches) {
                  // 添加匹配前的文字
                  if (match.index > currentIndex) {
                    const beforeText = text.substring(currentIndex, match.index);
                    if (beforeText.trim()) {
                      parts.push(beforeText);
                    }
                  }
                  
                  // 添加匹配項
                  if (match.type === 'link') {
                    const url = match.url!;
                    const isLineLink = url.includes('lin.ee');
                    const isCourseLink = url.includes('ppa.tw');
                    
                    let linkText = '🔗 前往連結';
                    if (isLineLink) linkText = '📱 聯絡我們';
                    else if (isCourseLink) linkText = '📚 立即報名';
                    
                    parts.push({ type: 'link', url, text: linkText });
                    // 使用記錄的結束索引
                    currentIndex = match.endIndex || (match.index + url.length);
                  } else if (match.type === 'bold') {
                    parts.push({ type: 'bold', text: match.text! });
                    currentIndex = match.index + (match.length || 0);
                  }
                }
                
                // 添加剩餘文字
                if (currentIndex < text.length) {
                  const remaining = text.substring(currentIndex);
                  if (remaining.trim()) {
                    parts.push(remaining);
                  }
                }
                
                return parts.length > 0 ? parts : [text];
              };
              
              // 類型守衛函數
              const isLinkPart = (part: string | { type: 'link'; url: string; text: string } | { type: 'bold'; text: string }): part is { type: 'link'; url: string; text: string } => {
                return typeof part === 'object' && part !== null && 'type' in part && part.type === 'link';
              };
              
              const isBoldPart = (part: string | { type: 'link'; url: string; text: string } | { type: 'bold'; text: string }): part is { type: 'bold'; text: string } => {
                return typeof part === 'object' && part !== null && 'type' in part && part.type === 'bold';
              };
              
              const messageParts = msg.role === 'model' && hasLinks ? parseMessage(msg.text) : [msg.text];
              
              return (
                <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed font-medium ${
                    msg.role === 'user' 
                      ? 'bg-indigo-600 text-white rounded-tr-none shadow-xl shadow-indigo-600/10' 
                      : 'bg-white text-slate-700 border border-slate-100 rounded-tl-none shadow-sm'
                  }`}>
                    <div className="space-y-3">
                      {messageParts.map((part, i) => {
                        if (isLinkPart(part)) {
                          const isLineLink = part.url.includes('lin.ee');
                          const isCourseLink = part.url.includes('ppa.tw');
                          return (
                            <a
                              key={i}
                              href={part.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs transition-all ${
                                isLineLink
                                  ? 'bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl active:scale-95'
                                  : isCourseLink
                                  ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg hover:shadow-xl active:scale-95'
                                  : 'bg-slate-700 hover:bg-slate-800 text-white shadow-lg hover:shadow-xl active:scale-95'
                              }`}
                            >
                              {part.text}
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          );
                        }
                        if (isBoldPart(part)) {
                          return (
                            <strong key={i} className="font-bold text-slate-900">
                              {part.text}
                            </strong>
                          );
                        }
                        // 現在 TypeScript 知道這裡 part 一定是 string
                        return (
                          <span key={i} className="whitespace-pre-wrap block">
                            {part}
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            })}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl border border-slate-100 rounded-tl-none animate-pulse">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-slate-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-slate-100">
            <div className="flex gap-2">
              <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="輸入您的需求..." 
                className="flex-grow px-5 py-3 bg-slate-100 rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all"
              />
              <button 
                onClick={handleSend}
                disabled={isLoading}
                className="bg-indigo-600 text-white p-3 rounded-2xl hover:bg-indigo-700 transition-all disabled:opacity-50 shadow-lg shadow-indigo-600/20 active:scale-95"
                aria-label="Send message"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      )}

      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-indigo-600 rounded-full flex items-center justify-center text-white shadow-2xl hover:bg-indigo-700 hover:scale-110 transition-all active:scale-95 group relative ring-4 ring-white/50"
        aria-label="Open AI chat"
      >
        {!isOpen ? (
          <MessageCircle className="w-8 h-8" />
        ) : (
          <X className="w-8 h-8" />
        )}
      </button>
    </div>
  );
};

export default AIAgent;
