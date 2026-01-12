import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'AIJOB - 客製化 AI 系統與實戰培訓',
    short_name: 'AIJOB',
    description: '提供頂尖的客製化 AI 系統開發服務與實戰培訓課程',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#4f46e5',
    icons: [
      {
        src: '/image/aijoblogo.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
