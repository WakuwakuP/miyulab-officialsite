import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Analytics } from '@vercel/analytics/react'
import { DefaultSeo } from 'next-seo'
import { IconContext } from 'react-icons/lib'

import { Footer, Header, SiteTop } from 'components/containers'

function MyApp({ Component, pageProps }: AppProps) {
  const BASE_URL = process.env.BASE_URL
  const SITE_TITLE = process.env.SITE_TITLE
  const SITE_DESCRIPTION = process.env.SITE_DESCRIPTION
  const SITE_NAME = process.env.SITE_NAME
  const TWITTER_HANDLE = process.env.TWITTER_HANDLE
  const TWITTER_SITE = process.env.TWITTER_SITE
  return (
    <>
      <div className='surface-duo-left'>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
        </Head>
        <DefaultSeo
          title='Home'
          titleTemplate={`${SITE_NAME} | %s`}
          description={SITE_DESCRIPTION}
          canonical={`https://${BASE_URL}`}
          openGraph={{
            type: 'website',
            title: SITE_TITLE,
            description: SITE_DESCRIPTION,
            site_name: SITE_NAME,
            url: `https://${BASE_URL}`,
            images: [
              {
                url: `https://${BASE_URL}/img/ogp.png`,
              },
            ],
          }}
          twitter={{
            handle: TWITTER_HANDLE,
            site: TWITTER_SITE,
            cardType: 'summary_large_image',
          }}
        />

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
