import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CourseParser from '@/components/CourseParser';
import AIAgent from '@/components/AIAgent';

export const metadata: Metadata = {
  title: '實戰培訓 | AIJOB',
  description: '精選 AI 實戰課程，從入門到進階，全面提升您的 AI 應用能力。包含 AI 自動化行銷、ChatGPT 應用、短影音智能體等課程。',
  openGraph: {
    title: '實戰培訓 | AIJOB',
    description: '精選 AI 實戰課程，從入門到進階，全面提升您的 AI 應用能力。包含 AI 自動化行銷、ChatGPT 應用、短影音智能體等課程。',
  },
};

// 課程結構化資料
const coursesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Course',
      position: 1,
      name: 'AI 自動化行銷實戰營',
      description: '從內容生成、廣告投放到數據分析，手把手帶您構建不眠不休的 AI 行銷系統。',
      provider: {
        '@type': 'Organization',
        name: 'AIJOB',
      },
      url: 'https://ppa.tw/s/04CADA38',
      image: 'https://static.pressplay.cc/static/uploads/enh_kv/res/077766024AF6A7A71BB083B54D17C68A/1756750411_resized.jpg',
    },
    {
      '@type': 'Course',
      position: 2,
      name: 'AI樂齡生活：輕鬆學會ChatGPT，讓智慧科技成為您的好幫手',
      description: '讓 ChatGPT 成為您的生活好幫手，從寫信、查詢資訊到日常陪伴，輕鬆上手。',
      provider: {
        '@type': 'Organization',
        name: 'AIJOB',
      },
      url: 'https://ppa.tw/s/C1A2F3C6',
      image: 'https://static.pressplay.cc/static/uploads/enh_kv/res/EFF7DD6F8741E0F5C2C5ED98504C45E6/1757574809_resized.jpg',
    },
    {
      '@type': 'Course',
      position: 3,
      name: 'AI 短影音智能體課程｜腳本選題定位全自動 & 一年授權',
      description: '解決創作瓶頸！利用 AI 智能體自動化腳本撰寫與選題，附帶工具授權。',
      provider: {
        '@type': 'Organization',
        name: 'AIJOB',
      },
      url: 'https://ppa.tw/s/E009BDED',
      image: 'https://static.pressplay.cc/static/uploads/enh_kv/res/project/878FECCAFF2CC900BB430B2F4B36DE40/29dc52be26789d7610fa5d04ae44a665_resized.jpg',
    },
  ],
};

export default function CoursesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesStructuredData) }}
      />
      <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-indigo-100">
        <Navbar />
        <main>
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
                  AIJob Online Courses
                </span>
                <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-slate-900">
                  AIJob <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
                    線上課程
                  </span>
                </h1>
                <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                  精選 AI 實戰課程，從入門到進階，<br />
                  全面提升您的 AI 應用能力。
                </p>
              </div>
            </div>
          </section>

          <CourseParser />

          {/* Learning Path Section */}
          <section className="py-24 px-4 bg-[#f8fafc]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">學習路徑</h2>
                <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                  從零基礎到 AI 專家，我們為您規劃完整的學習路徑
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-white rounded-3xl border-2 border-indigo-100 shadow-sm">
                  <div className="text-sm font-black text-indigo-600 uppercase tracking-wider mb-4">階段一</div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">入門基礎</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    了解 AI 的基本概念和應用場景，學習如何使用 ChatGPT 等基礎工具，建立 AI 應用的基礎認知。
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                      AI 基礎概念與應用
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                      ChatGPT 使用技巧
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full"></span>
                      實用案例練習
                    </li>
                  </ul>
                </div>
                <div className="p-8 bg-white rounded-3xl border-2 border-cyan-100 shadow-sm">
                  <div className="text-sm font-black text-cyan-600 uppercase tracking-wider mb-4">階段二</div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">實戰應用</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    深入學習 AI 在各個領域的實際應用，包括行銷自動化、內容生成、數據分析等專業技能。
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                      行銷自動化系統
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                      內容創作工具
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-cyan-600 rounded-full"></span>
                      數據分析應用
                    </li>
                  </ul>
                </div>
                <div className="p-8 bg-white rounded-3xl border-2 border-purple-100 shadow-sm">
                  <div className="text-sm font-black text-purple-600 uppercase tracking-wider mb-4">階段三</div>
                  <h3 className="text-2xl font-black text-slate-900 mb-4">進階開發</h3>
                  <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                    學習如何開發和部署自己的 AI 智能體，掌握 AI 系統的設計、開發和優化技能。
                  </p>
                  <ul className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                      AI 智能體開發
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                      系統整合與部署
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 bg-purple-600 rounded-full"></span>
                      效能優化技巧
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Course Features Section */}
          <section className="py-24 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">課程特色</h2>
                <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                  為什麼選擇 AIJob 的線上課程
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100/30 rounded-3xl border border-indigo-100">
                  <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">實戰導向</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    所有課程都基於真實案例，讓您能夠立即將所學應用到實際工作中，快速看到成效。
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-br from-cyan-50 to-cyan-100/30 rounded-3xl border border-cyan-100">
                  <div className="w-12 h-12 bg-cyan-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">完整教材</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    提供完整的課程影片、講義、練習題和專案範例，讓您能夠隨時複習和練習，加深理解。
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100/30 rounded-3xl border border-purple-100">
                  <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">專業導師</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    由業界頂尖的 AI 專家親自授課，分享實戰經驗和最佳實踐，讓您少走彎路。
                  </p>
                </div>
                <div className="p-8 bg-gradient-to-br from-emerald-50 to-emerald-100/30 rounded-3xl border border-emerald-100">
                  <div className="w-12 h-12 bg-emerald-600 rounded-2xl flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-black text-slate-900 mb-3">社群支援</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    加入學員專屬社群，與其他學員交流學習心得，導師也會定期回答問題，提供持續支援。
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-24 px-4 bg-[#f8fafc]">
            <div className="max-w-6xl mx-auto">
              <div className="text-center space-y-4 mb-16">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">學員見證</h2>
                <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                  看看其他學員的學習成果
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    「AI 自動化行銷課程讓我學會了如何建立完整的行銷自動化系統，現在我的行銷效率提升了 5 倍！」
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-indigo-100 rounded-full"></div>
                    <div>
                      <div className="font-black text-slate-900">陳小姐</div>
                      <div className="text-sm text-slate-500">行銷專員</div>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    「ChatGPT 課程非常實用，讓我這個完全不懂 AI 的人也能快速上手，現在我每天都會用 ChatGPT 來協助工作。」
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-cyan-100 rounded-full"></div>
                    <div>
                      <div className="font-black text-slate-900">林先生</div>
                      <div className="text-sm text-slate-500">業務經理</div>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    「短影音智能體課程幫我解決了內容創作的瓶頸，現在我能夠快速產出高品質的短影音內容。」
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
                    <div>
                      <div className="font-black text-slate-900">黃小姐</div>
                      <div className="text-sm text-slate-500">內容創作者</div>
                    </div>
                  </div>
                </div>
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 leading-relaxed mb-6">
                    「課程內容非常實用，導師講解清楚，而且有完整的練習題和專案，讓我能夠真正掌握 AI 應用的技能。」
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full"></div>
                    <div>
                      <div className="font-black text-slate-900">張先生</div>
                      <div className="text-sm text-slate-500">產品經理</div>
                    </div>
                  </div>
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
