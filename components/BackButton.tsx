'use client';

import React from 'react';
import { ArrowLeft } from 'lucide-react';

const BackButton: React.FC = () => {
  const handleBack = () => {
    if (typeof window !== 'undefined' && window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = '/';
    }
  };

  return (
    <button
      onClick={handleBack}
      className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-600 rounded-xl font-black border border-slate-200 hover:bg-slate-50 transition-all active:scale-95"
    >
      <ArrowLeft className="w-5 h-5" />
      返回上一頁
    </button>
  );
};

export default BackButton;
