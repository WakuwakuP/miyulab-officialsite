import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'
import { IconContext } from 'react-icons/lib'

import { Footer, Header, SiteTop } from 'components/containers'
import SEO from 'libs/next-seo.config'

function MyApp({ Component, pageProps }: AppProps) {
  const url = process.env.BASE_URL
  return (
    <>
      <div className='surface-duo-left'>
        <Head>
          <link rel='canonical' href={url} />
        </Head>
        <DefaultSeo {...SEO} />

        <IconContext.Provider value={{ className: 'icon' }}>
          <Header />
          <main className='container'>
            <Component {...pageProps} />
          </main>
          <Footer />
        </IconContext.Provider>
      </div>
      <div className='surface-duo-right'>
        <SiteTop />
      </div>
      <Analytics />
    </>
  )
}

export default MyApp
