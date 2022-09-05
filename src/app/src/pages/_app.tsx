import '../styles/globals.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  const url = process.env.BASE_URL
  return (
    <>
      <Head>
        <title>Miyulab</title>
        <link rel="canonical" href={url} />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
