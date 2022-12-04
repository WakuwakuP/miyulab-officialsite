import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='ja'>
      <Head>
        <link
          href='https://fonts.googleapis.com/css2?family=M+PLUS+1p:wght@100;400;500;700;800;900&display=swap'
          rel='stylesheet'
        ></link>
        {process.env.GOOGLE_ADSENSE_CLIENT_TOKEN && (
          <script
            async
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${process.env.GOOGLE_ADSENSE_CLIENT_TOKEN}`}
            crossOrigin='anonymous'
          />
        )}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
