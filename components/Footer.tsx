import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Youtube, MessageCircle } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-slate-500 py-20 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* 公司資訊 */}
          <div>
            <div className="text-4xl font-black text-slate-900 tracking-tighter mb-4">
              AI<span className="text-indigo-600">JOB</span>
            </div>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              提供頂尖的客製化 AI 系統開發服務與實戰培訓課程，幫助企業和個人掌握 AI 應用的核心技能。
            </p>
            {/* 社交媒體 */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61577238907515&locale=zh_TW"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-indigo-600 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/aijobschool/reels/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-indigo-600 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.threads.com/@aijobschool?xmt=AQF0EHGK7JsdnZLRXqcm47S4TsAxL9fn_cMZb8HzytJxaOM"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-indigo-600 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition-all font-black text-lg"
                aria-label="Threads"
              >
                <span className="text-[18px] leading-none">@</span>
              </a>
              <a
                href="https://www.youtube.com/@AngentAi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-slate-100 hover:bg-indigo-600 text-slate-600 hover:text-white rounded-xl flex items-center justify-center transition-all"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* 快速連結 */}
          <div>
            <h3 className="font-black text-slate-900 mb-4">快速連結</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  關於我們
                </Link>
              </li>
              <li>
                <Link href="/tool-library" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  AI工具庫
                </Link>
              </li>
              <li>
                <Link href="/apps" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  AI小程式
                </Link>
              </li>
              <li>
                <Link href="/courses" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  實戰培訓
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  常見問題
                </Link>
              </li>
            </ul>
          </div>

          {/* 服務 */}
          <div>
            <h3 className="font-black text-slate-900 mb-4">服務</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  聯絡我們
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  商務合作
                </Link>
              </li>
              <li>
                <a
                  href="https://aitools.aijob.com.tw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 hover:text-indigo-600 transition-colors"
                >
                  AI工具平台
                </a>
              </li>
            </ul>
          </div>

          {/* 聯絡資訊 */}
          <div>
            <h3 className="font-black text-slate-900 mb-4">聯絡資訊</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <a href="mailto:contact@aijob.com.tw" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  contact@aijob.com.tw
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <a href="tel:+886-2-1234-5678" className="text-slate-600 hover:text-indigo-600 transition-colors">
                  +886-2-1234-5678
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                <span className="text-slate-600">
                  台北市信義區<br />信義路五段 7 號
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* 底部 */}
        <div className="pt-8 border-t border-slate-100">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap justify-center gap-6 text-xs font-bold text-slate-400">
              <Link href="/privacy" className="hover:text-indigo-600 transition-colors">隱私條款</Link>
              <Link href="/terms" className="hover:text-indigo-600 transition-colors">服務協議</Link>
              <Link href="/contact" className="hover:text-indigo-600 transition-colors">商務合作</Link>
            </div>
            <p className="text-[10px] font-black text-slate-300 tracking-[0.5em] uppercase">
              © 2024 AIJOB LABS. POWERED BY AI GENERATION.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
