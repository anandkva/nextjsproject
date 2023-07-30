/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_MONGO_URL: process.env.NEXT_PUBLIC_MONGO_URL,
  },
};

module.exports = nextConfig;
