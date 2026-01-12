import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin', 'latin-ext'] });

export const metadata: Metadata = {
  title: {
    default: 'AIJOB - 客製化 AI 系統與實戰培訓',
    template: '%s | AIJOB',
  },
  description: '提供頂尖的客製化 AI 系統開發服務，透過實戰課程手把手教您掌握 AI 智能體開發、招募優化、內容行銷等核心技能。',
  keywords: ['AI 智能體', 'AI 培訓', 'AI 招募', 'ChatGPT', 'AI 工具', 'AI 課程', 'AI 開發', 'AI 自動化', 'AI 智能體開發'],
  authors: [{ name: 'AIJOB Labs' }],
  creator: 'AIJOB Labs',
  publisher: 'AIJOB Labs',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://aijob.com.tw'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'zh_TW',
    url: 'https://aijob.com.tw',
    siteName: 'AIJOB',
    title: 'AIJOB - 客製化 AI 系統與實戰培訓',
    description: '提供頂尖的客製化 AI 系統開發服務，透過實戰課程手把手教您掌握 AI 智能體開發、招募優化、內容行銷等核心技能。',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'AIJOB - AI 智能體開發與培訓',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AIJOB - 客製化 AI 系統與實戰培訓',
    description: '提供頂尖的客製化 AI 系統開發服務，透過實戰課程手把手教您掌握 AI 智能體開發、招募優化、內容行銷等核心技能。',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-TW" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
