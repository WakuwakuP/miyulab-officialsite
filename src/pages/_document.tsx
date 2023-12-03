import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;400;500;700;800;900&display=swap'
          rel='stylesheet'
        ></link>
        {process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_TOKEN}`}
            crossOrigin='anonymous'
          />
        )}
        <Script async src='https://platform.twitter.com/widgets.js' strategy='lazyOnload' />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
