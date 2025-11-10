/**
 *  @type {import('next').NextConfig}
 */
const nextConfig = {
  env: {
    BASE_URL: process.env.BASE_URL,
    SITE_DESCRIPTION: process.env.SITE_DESCRIPTION,
    SITE_NAME: process.env.SITE_NAME,
    SITE_TITLE: process.env.SITE_TITLE,
    TWITTER_HANDLE: process.env.TWITTER_HANDLE,
    TWITTER_SITE: process.env.TWITTER_SITE,
  },
  experimental: {},
  images: {
    remotePatterns: [
      {
        hostname: 'images.microcms-assets.io',
        protocol: 'https',
      },
    ],
  },
  reactStrictMode: true,
}

module.exports = nextConfig
