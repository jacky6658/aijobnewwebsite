import { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ToolLibrary from '@/components/ToolLibrary';
import AIApps from '@/components/AIApps';
import CourseParser from '@/components/CourseParser';
import Mentors from '@/components/Mentors';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import AIAgent from '@/components/AIAgent';

export const metadata: Metadata = {
  title: '首頁',
  description: 'AIJOB 提供頂尖的客製化 AI 系統開發服務，包含 AI 智能體開發、招募優化工具、內容行銷自動化等解決方案。',
  openGraph: {
    title: 'AIJOB - 客製化 AI 系統與實戰培訓',
    description: '提供頂尖的客製化 AI 系統開發服務，透過實戰課程手把手教您掌握 AI 智能體開發、招募優化、內容行銷等核心技能。',
  },
};

// 結構化資料（JSON-LD）
const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'AIJOB',
  url: 'https://aijob.com.tw',
  logo: 'https://aijob.com.tw/image/aijoblogo.svg',
  description: '提供頂尖的客製化 AI 系統開發服務與實戰培訓課程',
  sameAs: [
    'https://www.facebook.com/profile.php?id=61577238907515',
    'https://www.instagram.com/aijobschool',
    'https://www.threads.com/@aijobschool',
    'https://youtube.com/@aijobschool',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'aiagentg888@gmail.com',
    telephone: '+886-2-6605-7111',
    areaServed: 'TW',
    availableLanguage: 'zh-TW',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'TW',
    addressLocality: '台北市',
    addressRegion: '內湖區',
    streetAddress: '康寧路三段54號之7 3樓',
  },
};

// LocalBusiness 結構化資料
const localBusinessData = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'AIJOB',
  image: 'https://aijob.com.tw/image/aijoblogo.svg',
  '@id': 'https://aijob.com.tw',
  url: 'https://aijob.com.tw',
  telephone: '+886-2-6605-7111',
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '康寧路三段54號之7 3樓',
    addressLocality: '台北市',
    addressRegion: '內湖區',
    postalCode: '114',
    addressCountry: 'TW',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 25.0780,
    longitude: 121.6110,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: [
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
    ],
    opens: '09:00',
    closes: '18:00',
  },
};

// 課程結構化資料
const coursesStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  itemListElement: [
    {
      '@type': 'Course',
      position: 1,
      name: 'AI 自動化行銷實戰營',
      description: '從內容生成、廣告投放到數據分析，手把手帶您構建不眠不休的 AI 行銷系統。',
      provider: {
        '@type': 'Organization',
        name: 'AIJOB',
      },
      url: 'https://ppa.tw/s/04CADA38',
      image: 'https://static.pressplay.cc/static/uploads/timeline/20240327/988458D4DE763C52E9B3901BD3B17743/20240327113645851480.png',
    },
    {
      '@type': 'Course',
      position: 2,
      name: 'AI樂齡生活：輕鬆學會ChatGPT，讓智慧科技成為您的好幫手',
      description: '讓 ChatGPT 成為您的生活好幫手，從寫信、查詢資訊到日常陪伴，輕鬆上手。',
      provider: {
        '@type': 'Organization',
        name: 'AIJOB',
      },
      url: 'https://ppa.tw/s/C1A2F3C6',
      image: 'https://static.pressplay.cc/static/uploads/timeline/20240105/9284D7F7E04C7410884F268155A03B0A/20240105151240428945.png',
    },
    {
      '@type': 'Course',
      position: 3,
      name: 'AI 短影音智能體課程｜腳本選題定位全自動 & 一年授權',
      description: '解決創作瓶頸！利用 AI 智能體自動化腳本撰寫與選題，附帶工具授權。',
      provider: {
        '@type': 'Organization',
        name: 'AIJOB',
      },
      url: 'https://ppa.tw/s/E009BDED',
      image: 'https://static.pressplay.cc/static/uploads/timeline/20240522/D838B57069E7238290295627680D9F0B/20240522105943764836.png',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(coursesStructuredData) }}
      />
      <div className="min-h-screen bg-[#fafbfc] text-slate-900 selection:bg-indigo-100">
        <Navbar />
        <main>
          <Hero />
          <ToolLibrary />
          <AIApps />
          <CourseParser />
          <Mentors />
          <ContactForm />
        </main>
        <Footer />
        <AIAgent />
      </div>
    </>
  );
}
