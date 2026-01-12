import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAgent from '@/components/AIAgent';

export const metadata: Metadata = {
  title: '服務條款 | AIJOB',
  description: 'AIJOB 服務條款，說明使用我們服務的條款和條件。',
  alternates: {
    canonical: '/terms',
  },
  openGraph: {
    title: '服務條款 | AIJOB',
    description: 'AIJOB 服務條款，說明使用我們服務的條款和條件。',
    url: 'https://aijob.com.tw/terms',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-indigo-100">
      <Navbar />
      <main>
        <section className="pt-40 pb-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">服務條款</h1>
              <p className="text-slate-500 text-lg font-medium">
                最後更新日期：2024 年 1 月 1 日
              </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">1. 接受條款</h2>
                <p className="text-slate-600 leading-relaxed">
                  歡迎使用 AIJOB（以下簡稱「我們」）提供的服務。當您使用我們的網站、服務或產品時，即表示您同意遵守本服務條款。如果您不同意這些條款，請勿使用我們的服務。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">2. 服務說明</h2>
                <p className="text-slate-600 leading-relaxed">
                  AIJOB 提供以下服務：
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                  <li>客製化 AI 系統開發服務</li>
                  <li>AI 應用培訓課程</li>
                  <li>AI 工具庫和智能體應用</li>
                  <li>技術諮詢和支援服務</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">3. 用戶責任</h2>
                <p className="text-slate-600 leading-relaxed">
                  使用我們的服務時，您同意：
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                  <li>提供準確、完整和最新的資訊</li>
                  <li>保護您的帳號和密碼安全</li>
                  <li>不得將服務用於任何非法或未經授權的目的</li>
                  <li>不得干擾或破壞服務的正常運作</li>
                  <li>遵守所有適用的法律和法規</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">4. 智慧財產權</h2>
                <p className="text-slate-600 leading-relaxed">
                  我們網站和服務中的所有內容，包括但不限於文字、圖形、標誌、圖標、圖像、音訊、視訊和軟體，均為 AIJOB 或其授權方的財產，受著作權、商標權和其他智慧財產權法律保護。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">5. 服務變更與終止</h2>
                <p className="text-slate-600 leading-relaxed">
                  我們保留隨時修改、暫停或終止任何服務的權利，無需事先通知。我們不對任何服務中斷或終止造成的損失承擔責任。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">6. 免責聲明</h2>
                <p className="text-slate-600 leading-relaxed">
                  我們的服務按「現狀」提供，不提供任何明示或暗示的保證。我們不對以下事項承擔責任：
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                  <li>服務的準確性、完整性或可靠性</li>
                  <li>服務中斷、錯誤或缺陷</li>
                  <li>因使用或無法使用服務而造成的任何損失</li>
                  <li>第三方內容或連結</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">7. 責任限制</h2>
                <p className="text-slate-600 leading-relaxed">
                  在法律允許的最大範圍內，我們對因使用或無法使用我們的服務而造成的任何直接、間接、偶然、特殊或衍生性損害不承擔責任。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">8. 第三方連結</h2>
                <p className="text-slate-600 leading-relaxed">
                  我們的服務可能包含指向第三方網站的連結。我們不對這些第三方網站的內容、隱私政策或做法負責。您訪問這些網站需自行承擔風險。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">9. 爭議解決</h2>
                <p className="text-slate-600 leading-relaxed">
                  因本服務條款引起的任何爭議，雙方應首先透過友好協商解決。如協商不成，應提交至台灣台北地方法院管轄。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">10. 條款變更</h2>
                <p className="text-slate-600 leading-relaxed">
                  我們保留隨時修改本服務條款的權利。任何重大變更將透過網站公告通知您。繼續使用我們的服務即表示您接受更新後的條款。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">11. 聯絡我們</h2>
                <p className="text-slate-600 leading-relaxed">
                  如果您對本服務條款有任何疑問，請透過以下方式聯繫我們：
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <p className="text-slate-600 mb-2">
                    <strong className="text-slate-900">電子郵件：</strong> legal@aijob.com.tw
                  </p>
                  <p className="text-slate-600 mb-2">
                    <strong className="text-slate-900">電話：</strong> +886-2-1234-5678
                  </p>
                  <p className="text-slate-600">
                    <strong className="text-slate-900">地址：</strong> 台北市信義區信義路五段 7 號
                  </p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIAgent />
    </div>
  );
}
