'use client';

import React from 'react';
import { FileText } from 'lucide-react';
import FilloutForm from './FilloutForm';

const OnlineQuestionnaire: React.FC = () => {
  return (
    <section className="py-24 px-4 bg-[#f8fafc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 space-y-4">
          <div className="flex items-center justify-center gap-3">
            <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center flex-shrink-0">
              <FileText className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900">線上問卷</h2>
              <p className="text-slate-600 text-sm mt-1">點擊下方按鈕填寫問卷，我們將盡快與您聯繫</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="p-8 bg-gradient-to-br from-indigo-50 to-indigo-100/30 rounded-3xl border border-indigo-100 hover:shadow-xl transition-all">
            <FilloutForm
              formId="3Lg2m567K9us"
              title="企業服務諮詢"
              description="填寫此問卷以獲得專業的企業服務諮詢"
            />
          </div>
          <div className="p-8 bg-gradient-to-br from-purple-50 to-purple-100/30 rounded-3xl border border-purple-100 hover:shadow-xl transition-all">
            <FilloutForm
              formId="4gKft5pCT9us"
              title="AIJob智能客製化AI"
              description="填寫此問卷以了解客製化AI服務"
              buttonText="點我聯繫我們"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineQuestionnaire;
