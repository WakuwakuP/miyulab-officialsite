/**
 *  @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.microcms-assets.io',
      },
    ],
  },
  experimental: {},
  env: {
    BASE_URL: process.env.BASE_URL,
    SITE_TITLE: process.env.SITE_TITLE,
    SITE_DESCRIPTION: process.env.SITE_DESCRIPTION,
    SITE_NAME: process.env.SITE_NAME,
    TWITTER_HANDLE: process.env.TWITTER_HANDLE,
    TWITTER_SITE: process.env.TWITTER_SITE,
  },
}

module.exports = nextConfig
