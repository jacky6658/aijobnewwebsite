/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'static.pressplay.cc'],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  generateBuildId: async () => {
    return 'aijob-' + Date.now();
  },
  // 增加構建超時時間
  staticPageGenerationTimeout: 120,
};

module.exports = nextConfig;
