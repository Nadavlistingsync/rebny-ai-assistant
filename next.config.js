/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true
  },
  output: 'export',
  distDir: '.next',
  basePath: '/rebny-ai-assistant',
  assetPrefix: '/rebny-ai-assistant'
};

module.exports = nextConfig;
