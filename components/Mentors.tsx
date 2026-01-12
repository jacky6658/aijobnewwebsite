import React from 'react';
import { MENTORS } from '../constants';

const Mentors: React.FC = () => {
  return (
    <section id="mentors" className="py-32 px-4 bg-[#f8fafc] scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24 space-y-4">
          <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase block">Expert Faculty</span>
          <h2 className="text-4xl font-black text-slate-900 uppercase tracking-tighter">業界<span className="text-indigo-600 font-black">頂尖導師</span>團隊</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {MENTORS.map((mentor) => (
            <div key={mentor.id} className="bg-white p-14 rounded-[4rem] border border-slate-100 shadow-xl shadow-indigo-500/5 flex flex-col items-center text-center group hover:border-indigo-200 transition-all duration-500">
              <div className="relative mb-12">
                <div className="w-44 h-44 rounded-full overflow-hidden border-8 border-white shadow-2xl p-1">
                  <img 
                    src={mentor.avatar} 
                    alt={mentor.name}
                    className="w-full h-full object-cover rounded-full group-hover:scale-110 transition-transform duration-700" 
                  />
                </div>
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">{mentor.name}</h3>
              <p className="text-indigo-600 font-black text-xs tracking-[0.2em] mb-8 uppercase">{mentor.title}</p>
              <p className="text-slate-500 text-sm leading-relaxed mb-12 flex-grow font-medium opacity-80">{mentor.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
