/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { hostname: 'images.unsplash.com' },
      { hostname: 'static.pressplay.cc' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  poweredByHeader: false,
  generateBuildId: async () => {
    return 'aijob-' + Date.now();
  },
  staticPageGenerationTimeout: 120,
};

module.exports = nextConfig;
