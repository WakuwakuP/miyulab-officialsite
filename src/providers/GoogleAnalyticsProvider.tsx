'use client'

import Head from 'next/head'

import { GoogleAnalytics, usePageView } from 'libs/gtag'

export const GoogleAnalyticsProvider = () => {
  usePageView()
  return (
    <Head>
      <GoogleAnalytics />
    </Head>
  )
}
