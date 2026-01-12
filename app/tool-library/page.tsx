import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ToolLibrary from '@/components/ToolLibrary';
import AIAgent from '@/components/AIAgent';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'AI工具庫 | AIJOB',
  description: '整合全球最頂尖的 AI 應用工具，從寫作、設計、開發到行銷，一鍵啟動您的智能轉型。',
  alternates: {
    canonical: '/tool-library',
  },
  openGraph: {
    title: 'AI工具庫 | AIJOB',
    description: '整合全球最頂尖的 AI 應用工具，從寫作、設計、開發到行銷，一鍵啟動您的智能轉型。',
    url: 'https://aijob.com.tw/tool-library',
  },
};

// 工具庫頁面結構化資料
const toolLibraryStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AIJOB AI 工具庫',
  description: '整合全球最頂尖的 AI 應用工具，從寫作、設計、開發到行銷，一鍵啟動您的智能轉型。',
  url: 'https://aijob.com.tw/tool-library',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SoftwareApplication',
        name: 'AI 工具庫',
        applicationCategory: 'BusinessApplication',
        description: '整合全球最頂尖的 AI 應用工具',
      },
    ],
  },
};

export default function ToolLibraryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toolLibraryStructuredData) }}
      />
      <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-indigo-100">
        <Navbar />
        <main>
          <div className="max-w-7xl mx-auto px-4 pt-32 pb-8">
            <Breadcrumb items={[
              { name: '首頁', url: '/' },
              { name: 'AI工具庫', url: '/tool-library' },
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
                AI Ecosystem
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-slate-900">
                AIJob <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
                  萬用工具庫
                </span>
              </h1>
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                整合全球最頂尖的 AI 應用，從寫作到開發，<br />
                一鍵啟動您的智能轉型。
              </p>
            </div>
          </div>
        </section>

        <ToolLibrary />

        {/* Features Section */}
        <section className="py-24 px-4 bg-[#f8fafc]">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">為什麼選擇 AIJob 工具庫</h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                我們精選全球最優質的 AI 工具，為您提供一站式解決方案
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">精選優質工具</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  我們嚴格篩選全球頂尖的 AI 工具，確保每個工具都經過實際測試，品質有保障。
                </p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">快速上手</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  提供詳細的使用指南和教學資源，讓您快速掌握每個工具的使用方法，立即提升工作效率。
                </p>
              </div>
              <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3">專業支援</h3>
                <p className="text-slate-600 leading-relaxed text-sm">
                  我們的專業團隊隨時為您提供技術支援和使用建議，確保您能夠充分發揮工具的價值。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">應用場景</h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                看看這些工具如何幫助不同行業提升效率
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100/30 rounded-3xl border border-indigo-100">
                <h3 className="text-2xl font-black text-slate-900 mb-4">內容創作</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  從文章撰寫、圖片生成到影片剪輯，AI 工具幫助內容創作者快速產出高品質內容，提升創作效率。
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                    自動生成文章大綱和內容
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                    AI 圖片和影片生成
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                    內容優化和 SEO 建議
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gradient-to-br from-cyan-50 to-cyan-100/30 rounded-3xl border border-cyan-100">
                <h3 className="text-2xl font-black text-slate-900 mb-4">企業營運</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  自動化重複性工作，優化業務流程，讓企業能夠專注於核心業務發展，提升競爭力。
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                    智能客服和自動回覆
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                    數據分析和報表生成
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                    流程自動化和優化
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100/30 rounded-3xl border border-purple-100">
                <h3 className="text-2xl font-black text-slate-900 mb-4">行銷推廣</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  從廣告文案到社群媒體管理，AI 工具幫助行銷團隊提升行銷效果，降低營運成本。
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                    自動生成行銷文案和素材
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                    受眾分析和精準投放
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                    行銷數據追蹤和優化
                  </li>
                </ul>
              </div>
              <div className="p-8 bg-gradient-to-br from-emerald-50 to-emerald-100/30 rounded-3xl border border-emerald-100">
                <h3 className="text-2xl font-black text-slate-900 mb-4">開發設計</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  AI 輔助程式碼生成和 UI 設計，讓開發者和設計師能夠更快完成專案，提升生產力。
                </p>
                <ul className="space-y-2 text-slate-600 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                    程式碼自動生成和優化
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                    UI/UX 設計輔助
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full"></span>
                    測試和除錯自動化
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </main>
        <Footer />
        <AIAgent />
      </div>
    </>
  );
}
