import '../styles/globals.css'
import type { Metadata } from 'next'
import { M_PLUS_1p } from 'next/font/google'
import type { ReactNode } from 'react'

import { SpeedInsights } from '@vercel/speed-insights/next'

import { Footer, Header } from 'components/containers'
import { CategoriesDropdown } from 'components/containers/CategoriesDropdown/CategoriesDropdown'
import { GoogleAnalytics } from 'libs/gtag'
import SurfaceDuoProvider from 'providers/SurfaceDuoProvider'

if (!process.env.BASE_URL) {
  throw new Error('Please define BASE_URL in your environment')
}
if (!process.env.SITE_TITLE) {
  throw new Error('Please define SITE_TITLE in your environment')
}

const BASE_URL = process.env.BASE_URL
const SITE_TITLE = process.env.SITE_TITLE
const SITE_DESCRIPTION = process.env.SITE_DESCRIPTION
const SITE_NAME = process.env.SITE_NAME ?? SITE_TITLE
const TWITTER_HANDLE = process.env.TWITTER_HANDLE
const TWITTER_SITE = process.env.TWITTER_SITE

const globalFont = M_PLUS_1p({
  subsets: ['cyrillic', 'latin', 'latin-ext', 'vietnamese'],
  weight: ['100', '400', '500', '700', '800', '900'],
  display: 'swap',
})

export const revalidate = 600

export const metadata: Metadata = {
  title: { default: `Home | ${SITE_NAME}`, template: `%s | ${SITE_NAME}` },
  description: SITE_DESCRIPTION,
  openGraph: {
    type: 'website',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: SITE_NAME,
    url: `https://${BASE_URL}`,
    images: [{ url: `https://${BASE_URL}/img/ogp.png` }],
  },
  twitter: {
    creator: TWITTER_HANDLE,
    site: TWITTER_SITE,
    card: 'summary_large_image',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='ja'>
      <head>
        {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN}`}
            crossOrigin='anonymous'
          />
        )}
        <script async src='https://platform.twitter.com/widgets.js' />
        <GoogleAnalytics />
      </head>
      <body className={globalFont.className}>
        <SurfaceDuoProvider header={<Header categoriesDropdown={<CategoriesDropdown />} />} footer={<Footer />}>
          {children}
          <SpeedInsights />
        </SurfaceDuoProvider>
      </body>
    </html>
  )
}
