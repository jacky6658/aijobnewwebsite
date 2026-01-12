import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AIAgent from '@/components/AIAgent';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: '聯絡我們 | AIJOB',
  description: '有任何問題或需求？歡迎透過表單或直接聯繫我們，我們很樂意為您提供 AI 系統開發與培訓服務的協助。',
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: '聯絡我們 | AIJOB',
    description: '有任何問題或需求？歡迎透過表單或直接聯繫我們，我們很樂意為您提供 AI 系統開發與培訓服務的協助。',
    url: 'https://aijob.com.tw/contact',
  },
};

// 聯絡頁面結構化資料
const contactStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'AIJOB',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'contact@aijob.com.tw',
      telephone: '+886-2-1234-5678',
      areaServed: 'TW',
      availableLanguage: 'zh-TW',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactStructuredData) }}
      />
      <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-indigo-100">
        <Navbar />
        <main>
          <div className="max-w-7xl mx-auto px-4 pt-32 pb-8">
            <Breadcrumb items={[
              { name: '首頁', url: '/' },
              { name: '聯絡我們', url: '/contact' },
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
                Contact Us
              </span>
              <h1 className="text-5xl md:text-7xl font-black leading-[1.1] tracking-tighter text-slate-900">
                聯絡我們
              </h1>
              <p className="text-slate-500 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
                有任何問題或需求？我們很樂意為您提供協助
              </p>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>
      <Footer />
      <AIAgent />
    </div>
  );
}
