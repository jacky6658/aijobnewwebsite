import React from 'react';
import { MENTORS } from '../constants';
import { Mail, ExternalLink } from 'lucide-react';

const Mentors: React.FC = () => {
  return (
    <>
      <section id="mentors" className="py-32 px-4 bg-[#f8fafc] scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24 space-y-4">
            <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase block">Expert Faculty</span>
            <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">業界<span className="text-indigo-600 font-black">頂尖導師</span>團隊</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {MENTORS.map((mentor) => (
              <a
                key={mentor.id}
                href={mentor.socials.website}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white p-14 rounded-[4rem] border border-slate-100 shadow-xl shadow-indigo-500/5 flex flex-col items-center text-center group hover:border-indigo-200 hover:shadow-indigo-500/10 transition-all duration-500 cursor-pointer"
              >
                <div className="relative mb-12">
                  <div className="w-44 h-44 rounded-full overflow-hidden border-8 border-white shadow-2xl p-1">
                    <img 
                      src={mentor.avatar} 
                      alt={mentor.name}
                      className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700" 
                    />
                  </div>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-indigo-600 transition-colors">{mentor.name}</h3>
                <p className="text-indigo-600 font-black text-xs tracking-[0.2em] mb-8 uppercase">{mentor.title}</p>
                <p className="text-slate-500 text-sm leading-relaxed mb-12 flex-grow font-medium opacity-80">{mentor.description}</p>
                <div className="flex items-center gap-2 text-indigo-600 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>了解更多</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* 邀請講師合作區塊 */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-cyan-50 rounded-[3rem] p-12 md:p-16 border-2 border-indigo-100 shadow-xl">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2 bg-indigo-600 text-white rounded-2xl text-[10px] font-black uppercase tracking-[0.3em] shadow-lg">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                持續招募中
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                持續邀請<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">頂尖講師</span>合作
              </h3>
              <p className="text-slate-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
                我們正在尋找更多優秀的 AI 領域專家加入我們的講師團隊。<br />
                如果您在 AI 應用、自動化、內容創作等領域有豐富經驗，歡迎與我們聯繫！
              </p>
              <div className="pt-6 flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="mailto:aiagentg888@gmail.com?subject=講師合作申請"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 text-white rounded-2xl font-black text-sm hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl active:scale-95"
                >
                  <Mail className="w-5 h-5" />
                  成為講師
                </a>
                <a
                  href="https://lin.ee/ZTgJbYG"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-700 rounded-2xl font-black text-sm hover:bg-slate-50 transition-all border-2 border-slate-200 hover:border-indigo-300 active:scale-95"
                >
                  LINE 聯繫
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
              <div className="pt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                  <span className="font-medium">AI 應用專家</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                  <span className="font-medium">自動化領域</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-slate-600">
                  <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                  <span className="font-medium">內容創作</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Mentors;
