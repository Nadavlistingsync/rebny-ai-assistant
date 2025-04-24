/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
  },
  output: 'export',
  distDir: 'public'
};

module.exports = nextConfig;
