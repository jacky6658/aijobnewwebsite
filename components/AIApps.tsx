import React from 'react';
import { AI_APPS } from '../constants';
import * as Icons from 'lucide-react';

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const iconName = name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('') as keyof typeof Icons;
  const IconComponent = (Icons[iconName] || Icons.Box) as React.ElementType;
  return <IconComponent className={className} />;
};

const AIApps: React.FC = () => {
  return (
    <section id="apps" className="py-24 px-4 bg-[#fcfdfe] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase block">AI Enterprise Solutions</span>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tight">AI 企業智能工具</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium text-lg">
            適用於各行各業的高效率 AI 智能體，從招募、行銷到數據分析，全面提升企業營運效率。
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {AI_APPS.map((app) => (
            <div key={app.id} className="group bg-white p-10 rounded-[3rem] border border-slate-100 shadow-xl shadow-indigo-500/5 hover:shadow-indigo-500/10 hover:border-indigo-100 transition-all duration-500 flex flex-col relative overflow-hidden">
              <div className="absolute top-6 right-6">
                <span className="flex items-center gap-1.5 px-3 py-1 bg-emerald-50 text-emerald-600 rounded-full text-[10px] font-black uppercase tracking-widest">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse"></span>
                  {app.status}
                </span>
              </div>
              
              <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center text-indigo-600 mb-8 group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 shadow-inner">
                <DynamicIcon name={app.icon} className="w-8 h-8" />
              </div>

              <div className="mb-2">
                <span className="text-[10px] font-black text-indigo-400 uppercase tracking-widest">
                  {app.category}
                </span>
              </div>
              
              <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
                {app.name}
              </h3>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-8 font-medium">
                {app.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-10 mt-auto">
                {app.tags.map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 bg-slate-50 text-slate-500 rounded-xl text-[11px] font-bold border border-slate-100">
                    #{tag}
                  </span>
                ))}
              </div>
              
              <a 
                href="https://aitools.aijob.com.tw/#category=AI%E5%93%A1%E5%B7%A5"
                rel="noopener noreferrer"
                className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-indigo-600 transition-all shadow-lg active:scale-95 text-center flex items-center justify-center"
              >
                立即使用工具
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIApps;
