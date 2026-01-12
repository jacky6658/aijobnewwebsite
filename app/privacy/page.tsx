import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import AIAgent from '@/components/AIAgent';

export const metadata: Metadata = {
  title: '隱私權政策 | AIJOB',
  description: 'AIJOB 隱私權政策，說明我們如何收集、使用和保護您的個人資料。',
  alternates: {
    canonical: '/privacy',
  },
  openGraph: {
    title: '隱私權政策 | AIJOB',
    description: 'AIJOB 隱私權政策，說明我們如何收集、使用和保護您的個人資料。',
    url: 'https://aijob.com.tw/privacy',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-indigo-100">
      <Navbar />
      <main>
        <section className="pt-40 pb-24 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">隱私權政策</h1>
              <p className="text-slate-500 text-lg font-medium">
                最後更新日期：2024 年 1 月 1 日
              </p>
            </div>

            <div className="prose prose-slate max-w-none space-y-8">
              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">1. 資料收集</h2>
                <p className="text-slate-600 leading-relaxed">
                  AIJOB（以下簡稱「我們」）致力於保護您的隱私權。當您使用我們的服務時，我們可能會收集以下類型的個人資料：
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                  <li>姓名、電子郵件地址、電話號碼等聯絡資訊</li>
                  <li>公司名稱、職稱等商業資訊</li>
                  <li>使用服務時產生的技術資料（如 IP 位址、瀏覽器類型）</li>
                  <li>透過聯絡表單或客服管道提供的其他資訊</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">2. 資料使用</h2>
                <p className="text-slate-600 leading-relaxed">
                  我們使用收集的個人資料用於以下目的：
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                  <li>提供、維護和改進我們的服務</li>
                  <li>回應您的詢問和提供客戶支援</li>
                  <li>發送服務相關的通知和更新</li>
                  <li>進行市場研究和分析</li>
                  <li>遵守法律義務和保護我們的合法權益</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">3. 資料保護</h2>
                <p className="text-slate-600 leading-relaxed">
                  我們採用適當的技術和組織措施來保護您的個人資料，防止未經授權的存取、使用、披露或銷毀。這些措施包括：
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                  <li>使用加密技術保護資料傳輸</li>
                  <li>限制對個人資料的存取權限</li>
                  <li>定期進行安全審計和更新</li>
                  <li>對員工進行隱私保護培訓</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">4. 資料分享</h2>
                <p className="text-slate-600 leading-relaxed">
                  我們不會向第三方出售、交易或出租您的個人資料。我們可能會在以下情況下分享您的資料：
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                  <li>獲得您的明確同意</li>
                  <li>為提供服務而需要與服務供應商分享（如雲端服務、支付處理）</li>
                  <li>遵守法律要求或回應政府機關的合法請求</li>
                  <li>保護我們的權利、財產或安全</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">5. 您的權利</h2>
                <p className="text-slate-600 leading-relaxed">
                  根據個人資料保護法，您對您的個人資料享有以下權利：
                </p>
                <ul className="list-disc list-inside space-y-2 text-slate-600 ml-4">
                  <li>查詢、閱覽您的個人資料</li>
                  <li>要求補充或更正您的個人資料</li>
                  <li>要求停止收集、處理或使用您的個人資料</li>
                  <li>要求刪除您的個人資料</li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">6. Cookie 使用</h2>
                <p className="text-slate-600 leading-relaxed">
                  我們的網站使用 Cookie 來改善用戶體驗、分析網站流量和提供個人化內容。您可以透過瀏覽器設定選擇接受或拒絕 Cookie。
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">7. 聯絡我們</h2>
                <p className="text-slate-600 leading-relaxed">
                  如果您對本隱私權政策有任何疑問，或想要行使您的權利，請透過以下方式聯繫我們：
                </p>
                <div className="bg-slate-50 p-6 rounded-xl border border-slate-200">
                  <p className="text-slate-600 mb-2">
                    <strong className="text-slate-900">電子郵件：</strong> privacy@aijob.com.tw
                  </p>
                  <p className="text-slate-600 mb-2">
                    <strong className="text-slate-900">電話：</strong> +886-2-1234-5678
                  </p>
                  <p className="text-slate-600">
                    <strong className="text-slate-900">地址：</strong> 台北市信義區信義路五段 7 號
                  </p>
                </div>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-black text-slate-900">8. 政策變更</h2>
                <p className="text-slate-600 leading-relaxed">
                  我們保留隨時修改本隱私權政策的權利。任何重大變更將透過網站公告或電子郵件通知您。繼續使用我們的服務即表示您接受更新後的政策。
                </p>
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
