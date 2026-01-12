'use client';

import React, { useState } from 'react';
import { Send, Mail, Phone, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // 模擬表單提交（實際應該連接到後端 API）
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight">聯絡我們</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium text-lg">
            有任何問題或需求？我們很樂意為您提供協助
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* 聯絡資訊 */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-black text-slate-900 mb-6">聯絡資訊</h3>
              <p className="text-slate-600 leading-relaxed mb-8">
                歡迎透過以下方式與我們聯繫，我們將盡快回覆您的詢問。
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-1">電子郵件</h4>
                  <a href="mailto:contact@aijob.com.tw" className="text-slate-600 hover:text-indigo-600 transition-colors">
                    contact@aijob.com.tw
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-cyan-600" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-1">電話</h4>
                  <a href="tel:+886-2-1234-5678" className="text-slate-600 hover:text-cyan-600 transition-colors">
                    +886-2-1234-5678
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-100 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 mb-1">地址</h4>
                  <p className="text-slate-600">
                    台北市信義區信義路五段 7 號
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-slate-100">
              <h4 className="font-black text-slate-900 mb-4">營業時間</h4>
              <div className="space-y-2 text-slate-600 text-sm">
                <div className="flex justify-between">
                  <span>週一至週五</span>
                  <span>09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span>週六</span>
                  <span>10:00 - 16:00</span>
                </div>
                <div className="flex justify-between">
                  <span>週日</span>
                  <span>休息</span>
                </div>
              </div>
            </div>
          </div>

          {/* 聯絡表單 */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-black text-slate-900 mb-2">
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="請輸入您的姓名"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-black text-slate-900 mb-2">
                    電子郵件 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-black text-slate-900 mb-2">
                    電話
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="0912-345-678"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-black text-slate-900 mb-2">
                    公司名稱
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    placeholder="請輸入公司名稱"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-black text-slate-900 mb-2">
                  詢問類型 <span className="text-red-500">*</span>
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                >
                  <option value="">請選擇詢問類型</option>
                  <option value="consultation">AI 系統諮詢</option>
                  <option value="training">培訓課程</option>
                  <option value="partnership">商務合作</option>
                  <option value="support">技術支援</option>
                  <option value="other">其他</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-black text-slate-900 mb-2">
                  訊息內容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all resize-none"
                  placeholder="請詳細描述您的需求或問題..."
                />
              </div>

              {submitStatus === 'success' && (
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-emerald-700">
                  感謝您的訊息！我們已收到您的詢問，將盡快與您聯繫。
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
                  發送失敗，請稍後再試或直接透過電子郵件聯繫我們。
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-xl font-black text-base shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    發送中...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    送出訊息
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
