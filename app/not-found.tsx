import { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import BackButton from '@/components/BackButton';

export const metadata: Metadata = {
  title: '404 - 頁面不存在 | AIJOB',
  description: '抱歉，您要尋找的頁面不存在。',
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-indigo-100">
      <Navbar />
      <main className="flex items-center justify-center min-h-[calc(100vh-5rem)] px-4">
        <div className="text-center space-y-8 max-w-2xl">
          <div className="space-y-4">
            <h1 className="text-9xl font-black text-indigo-600">404</h1>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900">頁面不存在</h2>
            <p className="text-slate-500 text-lg font-medium">
              抱歉，您要尋找的頁面可能已被移動或刪除。
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-900 text-white rounded-xl font-black hover:bg-indigo-600 transition-all shadow-xl active:scale-95"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              回到首頁
            </Link>
            <BackButton />
          </div>

          <div className="pt-12 space-y-4">
            <p className="text-slate-400 text-sm font-bold uppercase tracking-wider">或瀏覽以下頁面</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/about" className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors">
                關於我們
              </Link>
              <Link href="/tool-library" className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors">
                AI工具庫
              </Link>
              <Link href="/apps" className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors">
                AI小程式
              </Link>
              <Link href="/courses" className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors">
                實戰培訓
              </Link>
              <Link href="/contact" className="text-indigo-600 hover:text-indigo-700 font-bold transition-colors">
                聯絡我們
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
