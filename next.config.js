/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  "next.config.js": {
    output: 'export',
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "res.cloudinary.com" }
    ],
  },
};

module.exports = nextConfig;
