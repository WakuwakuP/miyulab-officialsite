/**
 *  @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.microcms-assets.io'],
  },
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
  swcMinify: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
}

module.exports = nextConfig