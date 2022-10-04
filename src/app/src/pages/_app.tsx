import '../styles/globals.css'
import Head from 'next/head'
import Image from 'next/future/image'
import type { AppProps } from 'next/app'
import Header from 'components/Header'
import Footer from 'components/Footer'
import miyuImage from '../../public/img/miyu.png'

function MyApp({ Component, pageProps }: AppProps) {
  const url = process.env.BASE_URL
  return (
    <>
      <div className='surface-duo-left'>
        <Head>
          <title>Miyulab</title>
          <link rel="canonical" href={url} />
        </Head>
        <Header />
        <main className='container'>
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
      <div className='surface-duo-right'>
        <Image src={miyuImage} alt='avater' />
      </div>
    </>
  )
}

export default MyApp
