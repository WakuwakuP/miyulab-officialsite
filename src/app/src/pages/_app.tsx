import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Header from 'components/element/Header'
import Footer from 'components/element/Footer'

function MyApp({ Component, pageProps }: AppProps) {
  const url = process.env.BASE_URL
  return (
    <>
      <Head>
        <title>Miyulab</title>
        <link rel="canonical" href={url} />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
