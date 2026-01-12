import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

export class GeminiService {
  private ai: GoogleGenAI;
  private hasApiKey: boolean;

  constructor() {
    // Next.js 環境變數：只在服務端可用
    const apiKey = process.env.API_KEY || '';
    this.hasApiKey = !!apiKey;
    
    if (this.hasApiKey) {
      this.ai = new GoogleGenAI({ apiKey });
    } else {
      // 如果沒有 API Key，創建一個空的實例（不會實際調用）
      this.ai = new GoogleGenAI({ apiKey: '' });
    }
  }

  // 檢查是否為課程相關問題
  private isCourseQuestion(message: string): boolean {
    const courseKeywords = ['課程', '培訓', '教學', '學習', '上課', '報名', '費用', '價格', '學費', '內容', '大綱', '時數', '時長'];
    const lowerMessage = message.toLowerCase();
    return courseKeywords.some(keyword => lowerMessage.includes(keyword));
  }

  // 檢查是否為工具相關問題
  private isToolQuestion(message: string): boolean {
    const toolKeywords = ['工具', '應用', 'app', '智能體', 'agent', '系統', '開發', '功能'];
    const lowerMessage = message.toLowerCase();
    return toolKeywords.some(keyword => lowerMessage.includes(keyword));
  }

  // 檢查是否為服務相關問題
  private isServiceQuestion(message: string): boolean {
    const serviceKeywords = ['服務', '諮詢', '合作', '開發', '客製', '報價', '費用', '價格', '聯絡', '聯繫'];
    const lowerMessage = message.toLowerCase();
    return serviceKeywords.some(keyword => lowerMessage.includes(keyword));
  }

  async chat(history: ChatMessage[], message: string): Promise<string> {
    try {
      // 檢查問題類型並提供制式回覆
      if (this.isCourseQuestion(message)) {
        return this.getCourseResponse(message);
      }
      
      if (this.isToolQuestion(message)) {
        return this.getToolResponse(message);
      }
      
      if (this.isServiceQuestion(message)) {
        return this.getServiceResponse(message);
      }

      // 如果沒有 API Key，返回提示訊息
      if (!this.hasApiKey) {
        return "抱歉，AI 服務目前無法使用。請聯繫我們獲取協助：https://lin.ee/ZTgJbYG";
      }

      // 一般問題使用 AI 回覆
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: [
          ...history.map(m => ({
            role: m.role,
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: message }] }
        ],
        config: {
          systemInstruction: `你現在是 AIJOB 的首席顧問。AIJOB 不是人力銀行，而是一個專注於『客製化 AI 系統開發』與『AI 實戰培訓』的平台。

【關於課程】
我們提供以下三門精選課程：
1. AI 自動化行銷實戰營 - 從內容生成、廣告投放到數據分析，手把手帶您構建不眠不休的 AI 行銷系統。連結：https://ppa.tw/s/04CADA38
2. AI樂齡生活：輕鬆學會ChatGPT - 讓 ChatGPT 成為您的生活好幫手，從寫信、查詢資訊到日常陪伴，輕鬆上手。連結：https://ppa.tw/s/C1A2F3C6
3. AI 短影音智能體課程 - 解決創作瓶頸！利用 AI 智能體自動化腳本撰寫與選題，附帶工具授權。連結：https://ppa.tw/s/E009BDED

【關於服務】
我們提供客製化 AI 系統開發、AI 工具庫、AI 小程式等服務。歡迎透過 LINE 聯繫我們：https://lin.ee/ZTgJbYG

語氣要專業、具備前瞻性，並能精準分析用戶對自動化工具的需求。`,
        },
      });

      return response.text || "抱歉，我現在無法回答，請稍後再試。";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "AI 連線異常，請檢查網路或稍後再試。";
    }
  }

  // 課程相關制式回覆
  private getCourseResponse(message: string): string {
    const lowerMessage = message.toLowerCase();
    
    if (lowerMessage.includes('行銷') || lowerMessage.includes('marketing')) {
      return `🎯 **AI 自動化行銷實戰營**

這門課程專為想要掌握 AI 行銷自動化的您設計！

**課程內容：**
• 內容生成自動化
• 廣告投放優化
• 數據分析與洞察
• 完整的行銷系統建構

**立即報名：** https://ppa.tw/s/04CADA38

有任何問題歡迎透過 LINE 聯繫我們：https://lin.ee/ZTgJbYG`;
    }
    
    if (lowerMessage.includes('樂齡') || lowerMessage.includes('長輩') || lowerMessage.includes('senior')) {
      return `👴 **AI樂齡生活：輕鬆學會ChatGPT**

專為樂齡族設計的智慧課程，讓 AI 成為您的生活好幫手！

**課程內容：**
• ChatGPT 基礎操作
• 寫信、查詢資訊
• 日常陪伴與協助
• 實用生活應用

**立即報名：** https://ppa.tw/s/C1A2F3C6

有任何問題歡迎透過 LINE 聯繫我們：https://lin.ee/ZTgJbYG`;
    }
    
    if (lowerMessage.includes('短影音') || lowerMessage.includes('影片') || lowerMessage.includes('video')) {
      return `🎬 **AI 短影音智能體課程**

解決創作瓶頸！全自動化腳本撰寫與選題！

**課程內容：**
• 腳本自動生成
• 選題定位策略
• 短影音內容優化
• 附帶工具一年授權

**立即報名：** https://ppa.tw/s/E009BDED

有任何問題歡迎透過 LINE 聯繫我們：https://lin.ee/ZTgJbYG`;
    }
    
    // 一般課程詢問
    return `📚 **AIJOB 線上課程**

我們提供三門精選 AI 實戰課程：

1. **AI 自動化行銷實戰營**
   從內容生成到數據分析，構建完整的 AI 行銷系統
   👉 https://ppa.tw/s/04CADA38

2. **AI樂齡生活：輕鬆學會ChatGPT**
   專為樂齡族設計，讓 AI 成為生活好幫手
   👉 https://ppa.tw/s/C1A2F3C6

3. **AI 短影音智能體課程**
   自動化腳本撰寫與選題，附帶工具授權
   👉 https://ppa.tw/s/E009BDED

想了解更多課程詳情或報名，歡迎透過 LINE 聯繫我們：https://lin.ee/ZTgJbYG`;
  }

  // 工具相關制式回覆
  private getToolResponse(message: string): string {
    return `🛠️ **AIJOB 工具與服務**

我們提供多種 AI 工具和服務：

**AI 工具庫**
整合全球最頂尖的 AI 應用，從寫作、設計到開發，一鍵啟動您的智能轉型。
👉 探索工具：https://aitools.aijob.com.tw

**AI 小程式**
• AI 獵才招募與文案大師
• AI 短影音智能體
• YT 頻道分析助手

**客製化開發**
根據您的需求，量身打造專屬的 AI 智能體系統。

想了解更多或諮詢服務，歡迎透過 LINE 聯繫我們：https://lin.ee/ZTgJbYG`;
  }

  // 服務相關制式回覆
  private getServiceResponse(message: string): string {
    return `💼 **AIJOB 服務諮詢**

我們提供以下服務：

**客製化 AI 系統開發**
根據您的業務需求，量身打造專屬的 AI 智能體系統。

**AI 實戰培訓課程**
從入門到進階，手把手教您掌握 AI 應用的核心技能。

**技術支援與維護**
提供完整的技術支援和系統維護服務。

**立即聯繫我們：**
📱 LINE：https://lin.ee/ZTgJbYG
📧 Email：contact@aijob.com.tw
📞 電話：+886-2-1234-5678

我們會盡快為您提供專業的諮詢服務！`;
  }

  async analyzeJobMarket(trends: any[]): Promise<string> {
    if (!this.hasApiKey) {
      return "目前無法取得分析數據，請聯繫我們：https://lin.ee/ZTgJbYG";
    }
    
    try {
      const response = await this.ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: `請根據以下市場數據，提供一段 50 字內、針對台灣市場的趨勢分析：${JSON.stringify(trends)}`,
        config: {
          systemInstruction: "你是一位資深 AI 產業分析師，請使用繁體中文進行回答。",
        }
      });
      return response.text || "目前無法取得分析數據。";
    } catch (error) {
      console.error("Market Analysis Error:", error);
      return "趨勢分析生成失敗，請稍後再試。";
    }
  }
}

export const gemini = new GeminiService();
