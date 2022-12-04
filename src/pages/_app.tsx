import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Analytics } from '@vercel/analytics/react'
import { IconContext } from 'react-icons/lib'

import { Footer, Header, SiteTop } from 'components/containers'

function MyApp({ Component, pageProps }: AppProps) {
  const url = process.env.BASE_URL
  return (
    <>
      <div className='surface-duo-left'>
        <Head>
          <title>Miyulab</title>
          <link rel='canonical' href={url} />
        </Head>

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
