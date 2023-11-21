/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_REACT_APP_API: process.env.NEXT_PUBLIC_REACT_APP_API,
  },
};

module.exports = nextConfig;
