import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIApps from '@/components/AIApps';
import AIAgent from '@/components/AIAgent';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'AI小程式 | AIJOB',
  description: '適用於各行各業的高效率 AI 智能體，從招募、行銷、內容生產到數據分析，提供全方位的企業級 AI 解決方案。',
  alternates: {
    canonical: '/apps',
  },
  openGraph: {
    title: 'AI小程式 | AIJOB',
    description: '適用於各行各業的高效率 AI 智能體，從招募、行銷、內容生產到數據分析，提供全方位的企業級 AI 解決方案。',
    url: 'https://aijob.com.tw/apps',
  },
};

// AI 應用頁面結構化資料
const appsStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'AIJOB AI 小程式',
  description: '適用於各行各業的高效率 AI 智能體，從招募、行銷、內容生產到數據分析，提供全方位的企業級 AI 解決方案。',
  url: 'https://aijob.com.tw/apps',
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: [
      {
        '@type': 'SoftwareApplication',
        name: 'AI 獵才招募與文案大師',
        applicationCategory: 'BusinessApplication',
        description: '專為各行各業設計，一鍵生成高轉換率的招募職缺文案與企業品牌故事',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'AI 短影音智能體',
        applicationCategory: 'MultimediaApplication',
        description: '全自動生成帳號定位、腳本選題與短影音內容，協助品牌快速獲客',
      },
      {
        '@type': 'SoftwareApplication',
        name: 'YT 頻道分析助手',
        applicationCategory: 'AnalyticsApplication',
        description: 'YouTube 頻道大數據分析，洞察競品策略與爆款關鍵字',
      },
    ],
  },
};

export default function AppsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(appsStructuredData) }}
      />
      <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-indigo-100">
        <Navbar />
        <main>
          <div className="max-w-7xl mx-auto px-4 pt-32 pb-8">
            <Breadcrumb items={[
              { name: '首頁', url: '/' },
              { name: 'AI小程式', url: '/apps' },
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
                AI Enterprise Solutions
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-slate-900">
                AI <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500">
                  企業智能工具
                </span>
              </h1>
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                適用於各行各業的高效率 AI 智能體，<br />
                從招募、行銷、內容生產到數據分析，全面提升企業營運效率與競爭力。
              </p>
            </div>
          </div>
        </section>

        <AIApps />

        {/* Benefits Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">為什麼選擇 AIJob 智能體</h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                適用於各行各業的高效率 AI 解決方案，無論是製造業、服務業、零售業還是科技業，都能找到適合的智能工具
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-10 bg-gradient-to-br from-indigo-50 to-indigo-100/30 rounded-3xl border border-indigo-100">
                <div className="text-5xl font-black text-indigo-600 mb-4">24/7</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">全天候運作</h3>
                <p className="text-slate-600 leading-relaxed">
                  AI 智能體不需要休息，能夠全天候為您的業務提供服務，無論何時都能快速回應客戶需求，提升服務品質。
                </p>
              </div>
              <div className="p-10 bg-gradient-to-br from-cyan-50 to-cyan-100/30 rounded-3xl border border-cyan-100">
                <div className="text-5xl font-black text-cyan-600 mb-4">10x</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">效率提升</h3>
                <p className="text-slate-600 leading-relaxed">
                  自動化處理重複性工作，讓您的團隊能夠專注於更有價值的任務，整體工作效率可提升 10 倍以上。
                </p>
              </div>
              <div className="p-10 bg-gradient-to-br from-purple-50 to-purple-100/30 rounded-3xl border border-purple-100">
                <div className="text-5xl font-black text-purple-600 mb-4">99%</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">準確率</h3>
                <p className="text-slate-600 leading-relaxed">
                  經過大量數據訓練的 AI 模型，能夠準確理解需求並提供正確的回應，準確率高達 99%，減少人為錯誤。
                </p>
              </div>
              <div className="p-10 bg-gradient-to-br from-emerald-50 to-emerald-100/30 rounded-3xl border border-emerald-100">
                <div className="text-5xl font-black text-emerald-600 mb-4">50%</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">成本節省</h3>
                <p className="text-slate-600 leading-relaxed">
                  減少人力成本，自動化處理大量工作，讓您能夠以更低的成本提供更好的服務，投資回報率顯著提升。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-24 px-4 bg-[#f8fafc]">
          <div className="max-w-5xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">如何使用</h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                簡單三步驟，立即開始使用 AI 智能體
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 w-24 h-24 bg-indigo-600 text-white rounded-3xl flex items-center justify-center font-black text-3xl shadow-xl">
                  1
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">選擇智能體</h3>
                  <p className="text-slate-600 leading-relaxed">
                    根據您的產業和業務需求，選擇最適合的 AI 智能體，無論是內容生成、數據分析、行銷自動化還是客戶服務。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 w-24 h-24 bg-cyan-600 text-white rounded-3xl flex items-center justify-center font-black text-3xl shadow-xl">
                  2
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">客製化設定</h3>
                  <p className="text-slate-600 leading-relaxed">
                    根據您的品牌風格和業務流程，客製化智能體的設定，包括回應風格、工作流程和整合方式。
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0 w-24 h-24 bg-purple-600 text-white rounded-3xl flex items-center justify-center font-black text-3xl shadow-xl">
                  3
                </div>
                <div className="flex-grow">
                  <h3 className="text-2xl font-black text-slate-900 mb-3">開始使用</h3>
                  <p className="text-slate-600 leading-relaxed">
                    完成設定後，智能體立即開始運作。我們提供完整的使用培訓和技術支援，確保您能夠充分發揮智能體的價值。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-24 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">客戶見證</h2>
              <p className="text-slate-500 text-lg font-medium max-w-2xl mx-auto">
                看看其他企業如何使用我們的 AI 智能體
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  「AI 智能體幫助我們的自動化流程提升了 3 倍效率，無論是內容生成還是數據分析，都能快速完成。」
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-indigo-100 rounded-full"></div>
                  <div>
                    <div className="font-black text-slate-900">張經理</div>
                    <div className="text-sm text-slate-500">營運總監</div>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  「內容生成器讓我們的行銷團隊能夠快速產出高品質內容，無論是社群貼文還是產品介紹，都能快速完成。」
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-cyan-100 rounded-full"></div>
                  <div>
                    <div className="font-black text-slate-900">李總監</div>
                    <div className="text-sm text-slate-500">電商行銷總監</div>
                  </div>
                </div>
              </div>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-slate-600 leading-relaxed mb-6">
                  「數據分析智能體幫助我們快速洞察市場趨勢，無論是零售業還是製造業，都能找到適合的應用場景。」
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-purple-100 rounded-full"></div>
                  <div>
                    <div className="font-black text-slate-900">王經理</div>
                    <div className="text-sm text-slate-500">數據分析經理</div>
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
