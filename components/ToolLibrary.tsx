import React from 'react';
import { TOOL_CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const iconName = name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('') as keyof typeof Icons;
  const IconComponent = (Icons[iconName] || Icons.Box) as React.ElementType;
  return <IconComponent className={className} />;
};

const ToolLibrary: React.FC = () => {
  return (
    <section id="tool-library" className="py-24 px-4 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto text-center space-y-16">
        <div className="space-y-4">
          <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase block">AI Ecosystem</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">AIJob 萬用工具庫</h2>
          <p className="text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium text-lg">
            整合全球最頂尖的 AI 應用，從寫作到開發，一鍵啟動您的智能轉型。
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {TOOL_CATEGORIES.map((cat, idx) => (
            <div key={idx} className="group relative">
              <div className={`p-8 rounded-[2.5rem] ${cat.color} h-full border border-slate-50 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 cursor-pointer flex flex-col items-center justify-center overflow-hidden`}>
                <div className="absolute top-0 right-0 -mr-4 -mt-4 w-24 h-24 bg-white opacity-10 rounded-full blur-2xl group-hover:scale-150 transition-transform"></div>
                <div className="relative z-10 p-5 bg-white rounded-2xl mb-5 shadow-lg group-hover:rotate-12 transition-transform">
                  <DynamicIcon name={cat.icon} className="w-8 h-8" />
                </div>
                <div className="relative z-10 font-black text-slate-900 text-lg tracking-tight">{cat.title}</div>
                <div className="mt-2 text-[10px] font-bold opacity-60 uppercase tracking-widest">Solutions</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolLibrary;
