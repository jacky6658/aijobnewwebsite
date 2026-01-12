import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Mentors from '@/components/Mentors';
import AIAgent from '@/components/AIAgent';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '關於我們 | AIJOB',
  description: '了解 AIJOB 團隊與使命，我們致力於提供頂尖的客製化 AI 系統開發服務與實戰培訓課程。',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: '關於我們 | AIJOB',
    description: '了解 AIJOB 團隊與使命，我們致力於提供頂尖的客製化 AI 系統開發服務與實戰培訓課程。',
    url: 'https://aijob.com.tw/about',
  },
};

// 關於我們頁面結構化資料
const aboutStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'AIJOB',
    url: 'https://aijob.com.tw',
    logo: 'https://aijob.com.tw/image/aijoblogo.svg',
    description: '提供頂尖的客製化 AI 系統開發服務與實戰培訓課程',
    foundingDate: '2024',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@aijob.com.tw',
      telephone: '+886-2-1234-5678',
    },
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutStructuredData) }}
      />
      <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-indigo-100">
        <Navbar />
        <main>
          <div className="max-w-7xl mx-auto px-4 pt-32 pb-8">
            <Breadcrumb items={[
              { name: '首頁', url: '/' },
              { name: '關於我們', url: '/about' },
            ]} />
          </div>
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-40 pb-24 px-4 bg-white">
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
                關於 AIJOB
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-slate-900">
                打造您的 <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
                  AI 智能未來
                </span>
              </h1>
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                AIJOB 致力於提供頂尖的客製化 AI 系統開發服務，<br />
                並透過實戰課程手把手教您掌握這項未來核心技能。
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">我們的使命</h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                讓每個人都能輕鬆掌握 AI 技術，透過智能工具提升工作效率與生活品質
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="p-8 bg-indigo-50 rounded-3xl border border-indigo-100">
                <div className="text-4xl font-black text-indigo-600 mb-4">01</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">客製化開發</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  根據您的需求，量身打造專屬的 AI 智能體系統
                </p>
              </div>
              <div className="p-8 bg-cyan-50 rounded-3xl border border-cyan-100">
                <div className="text-4xl font-black text-cyan-600 mb-4">02</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">實戰培訓</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  從入門到進階，手把手教您掌握 AI 應用的核心技能
                </p>
              </div>
              <div className="p-8 bg-purple-50 rounded-3xl border border-purple-100">
                <div className="text-4xl font-black text-purple-600 mb-4">03</div>
                <h3 className="text-xl font-black text-slate-900 mb-3">持續支援</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  提供完整的技術支援與系統維護服務
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 px-4 bg-[#f8fafc]">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">我們的故事</h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                AIJOB 誕生於對 AI 技術普及化的願景
              </p>
            </div>

            <div className="space-y-8 text-slate-600 leading-relaxed">
              <p className="text-lg">
                在 AI 技術快速發展的時代，我們發現許多企業和個人對 AI 應用充滿期待，卻因為技術門檻而卻步。AIJOB 的創立，正是為了打破這個障礙。
              </p>
              <p>
                我們相信，AI 不應該是少數人的專利，而是每個人都能掌握的工具。透過客製化的 AI 系統開發和實戰培訓，我們幫助企業提升營運效率，也幫助個人提升職場競爭力。
              </p>
              <p>
                從內容生成工具到數據分析系統，從自動化行銷到智能客服，我們已經協助超過數百家企業實現 AI 轉型，涵蓋製造業、服務業、零售業、科技業等各行各業，並培訓了數千名學員掌握 AI 應用技能。
              </p>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">核心價值</h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                我們堅持的信念與原則
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100/50 rounded-3xl border border-indigo-100">
                <h3 className="text-2xl font-black text-slate-900 mb-4">創新為本</h3>
                <p className="text-slate-600 leading-relaxed">
                  持續關注 AI 技術的最新發展，將最先進的技術應用到實際場景中，為客戶創造最大價值。
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-cyan-50 to-cyan-100/50 rounded-3xl border border-cyan-100">
                <h3 className="text-2xl font-black text-slate-900 mb-4">客戶至上</h3>
                <p className="text-slate-600 leading-relaxed">
                  深入了解客戶需求，提供量身定制的解決方案，確保每個專案都能完美契合客戶的業務目標。
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-3xl border border-purple-100">
                <h3 className="text-2xl font-black text-slate-900 mb-4">實戰導向</h3>
                <p className="text-slate-600 leading-relaxed">
                  所有培訓課程都基於真實案例，讓學員能夠立即將所學應用到實際工作中，快速看到成效。
                </p>
              </div>
              <div className="p-8 bg-gradient-to-br from-emerald-50 to-emerald-100/50 rounded-3xl border border-emerald-100">
                <h3 className="text-2xl font-black text-slate-900 mb-4">持續成長</h3>
                <p className="text-slate-600 leading-relaxed">
                  與客戶和學員建立長期合作關係，提供持續的技術支援和知識更新，共同成長進步。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-24 px-4 bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">服務流程</h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                從需求分析到系統上線，我們提供完整的服務流程
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-indigo-600 text-white rounded-2xl flex items-center justify-center font-black text-xl">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-slate-900 mb-2">需求分析</h3>
                  <p className="text-slate-600 leading-relaxed">
                    深入了解您的業務需求和痛點，分析 AI 技術的應用場景，制定最適合的解決方案。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-cyan-600 text-white rounded-2xl flex items-center justify-center font-black text-xl">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-slate-900 mb-2">方案設計</h3>
                  <p className="text-slate-600 leading-relaxed">
                    基於需求分析結果，設計完整的 AI 系統架構和功能模組，確保系統的可擴展性和穩定性。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-purple-600 text-white rounded-2xl flex items-center justify-center font-black text-xl">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-slate-900 mb-2">開發實作</h3>
                  <p className="text-slate-600 leading-relaxed">
                    採用敏捷開發方法，快速迭代並持續優化，確保系統品質和開發效率。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-emerald-600 text-white rounded-2xl flex items-center justify-center font-black text-xl">
                  4
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-slate-900 mb-2">測試部署</h3>
                  <p className="text-slate-600 leading-relaxed">
                    進行全面的功能測試和效能優化，確保系統穩定運行後正式上線部署。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-shrink-0 w-16 h-16 bg-orange-600 text-white rounded-2xl flex items-center justify-center font-black text-xl">
                  5
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-black text-slate-900 mb-2">培訓支援</h3>
                  <p className="text-slate-600 leading-relaxed">
                    提供完整的系統使用培訓和技術文件，並提供持續的技術支援和系統維護服務。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-indigo-600 mb-2">500+</div>
                <div className="text-slate-600 font-bold text-sm uppercase tracking-wider">企業客戶</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-cyan-600 mb-2">3000+</div>
                <div className="text-slate-600 font-bold text-sm uppercase tracking-wider">培訓學員</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-purple-600 mb-2">1000+</div>
                <div className="text-slate-600 font-bold text-sm uppercase tracking-wider">AI 專案</div>
              </div>
              <div className="text-center">
                <div className="text-5xl md:text-6xl font-black text-emerald-600 mb-2">98%</div>
                <div className="text-slate-600 font-bold text-sm uppercase tracking-wider">滿意度</div>
              </div>
            </div>
          </div>
        </section>

        {/* Mentors Section */}
        <Mentors />
      </main>
      <Footer />
      <AIAgent />
    </div>
  );
}
