/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
        port: "",
        pathname: "/**",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_REACT_APP_API: process.env.NEXT_PUBLIC_REACT_APP_API,
  },
};

module.exports = nextConfig;
