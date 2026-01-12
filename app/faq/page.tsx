import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import AIAgent from '@/components/AIAgent';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '常見問題 | AIJOB',
  description: 'AIJOB 常見問題解答，了解 AI 系統開發、培訓課程和服務相關的常見問題。',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: '常見問題 | AIJOB',
    description: 'AIJOB 常見問題解答，了解 AI 系統開發、培訓課程和服務相關的常見問題。',
    url: 'https://aijob.com.tw/faq',
  },
};

// FAQ 結構化資料
const faqStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'AIJOB 提供哪些服務？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'AIJOB 提供客製化 AI 系統開發、AI 應用培訓課程、AI 工具庫和智能體應用，以及技術諮詢和支援服務。我們可以根據您的需求，量身打造專屬的 AI 解決方案。',
      },
    },
    {
      '@type': 'Question',
      name: '開發一個 AI 系統需要多長時間？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '開發時間取決於專案的複雜度和需求。簡單的 AI 應用可能只需要 2-4 週，而複雜的企業級系統可能需要 2-6 個月。我們會在專案開始前提供詳細的時程規劃。',
      },
    },
    {
      '@type': 'Question',
      name: '你們支援哪些產業？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '我們的 AI 解決方案適用於各行各業，包括製造業、服務業、零售業、科技業、金融業、醫療業等。無論您的產業為何，我們都能提供適合的 AI 應用方案。',
      },
    },
    {
      '@type': 'Question',
      name: '課程適合初學者嗎？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '是的，我們提供從入門到進階的完整課程體系。入門課程專為沒有 AI 基礎的學員設計，會從基礎概念開始，手把手教您掌握 AI 應用的核心技能。',
      },
    },
    {
      '@type': 'Question',
      name: '如何收費？',
      acceptedAnswer: {
        '@type': 'Answer',
        text: '收費方式根據服務類型而異。AI 系統開發採用專案報價，培訓課程有固定價格，工具使用則有月費或年費方案。請聯繫我們獲取詳細的報價資訊。',
      },
    },
  ],
};

export default function FAQPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqStructuredData) }}
      />
      <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-indigo-100">
        <Navbar />
        <main>
          <div className="max-w-7xl mx-auto px-4 pt-32 pb-8">
            <Breadcrumb items={[
              { name: '首頁', url: '/' },
              { name: '常見問題', url: '/faq' },
            ]} />
          </div>
          {/* Hero Section */}
          <section className="relative overflow-hidden pt-8 pb-24 px-4 bg-white">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-[120px] opacity-60"></div>
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-cyan-50 rounded-full blur-[120px] opacity-40"></div>
          </div>

          <div className="relative max-w-5xl mx-auto text-center space-y-8">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-50 text-indigo-600 rounded-2xl border border-indigo-100 text-[10px] font-black uppercase tracking-[0.3em] shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                </span>
                Frequently Asked Questions
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-slate-900">
                常見問題
              </h1>
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                快速找到您想了解的答案
              </p>
            </div>
          </div>
        </section>

        <FAQ />
      </main>
      <Footer />
      <AIAgent />
    </div>
  );
}
