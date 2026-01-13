'use client';

import React, { useState, useEffect } from 'react';
import { COURSES } from '../constants';
import * as Icons from 'lucide-react';
import { SkeletonCard } from './ui/Skeleton';

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const iconName = name.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('') as keyof typeof Icons;
  const IconComponent = (Icons[iconName] || Icons.Box) as React.ElementType;
  return <IconComponent className={className} />;
};

interface CourseData {
  title: string;
  description: string;
  thumbnail: string;
  url: string;
}

const CourseParser: React.FC = () => {
  const [coursesData, setCoursesData] = useState<CourseData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 直接使用預設資料（已包含正確的 OG 圖片）
    const initialCourses: CourseData[] = COURSES.map(course => ({
      title: course.title,
      description: course.description,
      thumbnail: course.thumbnail,
      url: course.url
    }));

    setCoursesData(initialCourses);
    setIsLoading(false);
  }, []);

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const target = e.target as HTMLImageElement;
    // 如果圖片載入失敗，使用預設圖片
    if (!target.src.includes('unsplash.com')) {
      target.src = `https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=800`;
    }
  };

  // 如果還在載入，顯示載入狀態
  if (isLoading) {
    return (
      <section id="courses" className="py-32 px-4 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-3">
            <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase block">AIJob Online Courses</span>
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">AIJob 線上課程</h2>
            <p className="text-slate-500 max-w-xl mx-auto font-medium text-base">
              精選 AI 實戰課程，從入門到進階，全面提升您的 AI 應用能力。
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="courses" className="py-32 px-4 bg-white scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 space-y-3">
          <span className="text-indigo-600 font-bold tracking-[0.2em] text-xs uppercase block">AIJob Online Courses</span>
          <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">AIJob 線上課程</h2>
          <p className="text-slate-500 max-w-xl mx-auto font-medium text-base">
            精選 AI 實戰課程，從入門到進階，全面提升您的 AI 應用能力。
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coursesData.map((course, index) => (
            <div key={index} className="bg-white border-2 border-indigo-100 rounded-[3rem] overflow-hidden flex flex-col h-full min-h-[600px] transition-all hover:border-indigo-400 hover:shadow-2xl group relative shadow-xl shadow-indigo-200/10">
              <div className="flex flex-col h-full animate-in zoom-in-95 duration-700 bg-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-slate-900">
                  <img 
                    src={course.thumbnail} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-1000" 
                    onError={handleImageError}
                    loading="eager"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-cyan-500 backdrop-blur-md rounded-xl text-[9px] font-bold text-white shadow-lg uppercase tracking-wider flex items-center gap-1.5 border border-white/20">
                      <DynamicIcon name="check-circle" className="w-3.5 h-3.5" /> 熱門課程
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex-grow space-y-4">
                    <h3 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug group-hover:text-indigo-600 transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-3 font-normal">
                      {course.description}
                    </p>
                  </div>
                  <div className="mt-8 pt-6 border-t border-slate-50">
                    <a 
                      href={course.url} 
                      rel="noopener noreferrer" 
                      className="w-full py-4 bg-slate-900 hover:bg-indigo-600 text-white rounded-2xl font-bold text-sm shadow-xl flex items-center justify-center gap-2 transition-all active:scale-95 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    >
                      前往學習平台 <DynamicIcon name="external-link" className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseParser;
