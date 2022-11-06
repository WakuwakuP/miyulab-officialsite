import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Image from 'next/future/image'
import Head from 'next/head'

import { Analytics } from '@vercel/analytics/react'
import { IconContext } from 'react-icons/lib'

import miyuImage from '../../public/img/miyu.png'

import Footer from 'components/containers/Footer'
import Header from 'components/containers/Header'

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
        <Image src={miyuImage} alt='avater' />
      </div>
      <Analytics />
    </>
  )
}

export default MyApp
