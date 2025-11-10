'use client'

import { GoogleAnalytics, usePageView } from 'libs/gtag'
import Head from 'next/head'

export const GoogleAnalyticsProvider = () => {
  usePageView()
  return (
    <Head>
      <GoogleAnalytics />
    </Head>
  )
}
