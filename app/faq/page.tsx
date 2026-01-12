import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FAQ from '@/components/FAQ';
import AIAgent from '@/components/AIAgent';

export const metadata: Metadata = {
  title: '常見問題 | AIJOB',
  description: 'AIJOB 常見問題解答，了解 AI 系統開發、培訓課程和服務相關的常見問題。',
  openGraph: {
    title: '常見問題 | AIJOB',
    description: 'AIJOB 常見問題解答，了解 AI 系統開發、培訓課程和服務相關的常見問題。',
  },
};

export default function FAQPage() {
  return (
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
