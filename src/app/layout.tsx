import '../styles/globals.css'

import { SpeedInsights } from '@vercel/speed-insights/next'
import { Footer, Header } from 'components/containers'
import { CategoriesDropdown } from 'components/containers/CategoriesDropdown/CategoriesDropdown'
import { GoogleAnalytics } from 'libs/gtag'
import { type Metadata } from 'next'
import SurfaceDuoProvider from 'providers/SurfaceDuoProvider'
import { type ReactNode } from 'react'

// Handle missing environment variables gracefully during build
const BASE_URL = process.env.BASE_URL || 'localhost:3000'
const SITE_TITLE = process.env.SITE_TITLE || 'Miyulab Official Site'
const SITE_DESCRIPTION = process.env.SITE_DESCRIPTION
const SITE_NAME = process.env.SITE_NAME ?? SITE_TITLE
const TWITTER_HANDLE = process.env.TWITTER_HANDLE
const TWITTER_SITE = process.env.TWITTER_SITE

// Use CSS-based font loading to avoid network issues during build
const globalFont = {
  className: 'font-mplus',
  style: {
    fontFamily:
      '"M PLUS 1p", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
  },
}

export const revalidate = 600

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  openGraph: {
    description: SITE_DESCRIPTION,
    images: [{ url: `https://${BASE_URL}/img/ogp.png` }],
    siteName: SITE_NAME,
    title: SITE_TITLE,
    type: 'website',
    url: `https://${BASE_URL}`,
  },
  title: { default: `Home | ${SITE_NAME}`, template: `%s | ${SITE_NAME}` },
  twitter: {
    card: 'summary_large_image',
    creator: TWITTER_HANDLE,
    site: TWITTER_SITE,
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja">
      <head>
        {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN && (
          <script
            async={true}
            crossOrigin="anonymous"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN}`}
          />
        )}
        <script async={true} src="https://platform.twitter.com/widgets.js" />
        <GoogleAnalytics />
      </head>
      <body
        className={`${globalFont.className} font-mplus`}
        style={globalFont.style}
      >
        <SurfaceDuoProvider
          footer={<Footer />}
          header={<Header categoriesDropdown={<CategoriesDropdown />} />}
        >
          {children}
          <SpeedInsights />
        </SurfaceDuoProvider>
      </body>
    </html>
  )
}
