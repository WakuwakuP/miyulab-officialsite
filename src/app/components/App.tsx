import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

interface Props {
  children: React.ReactNode;
  pathname: string;
}

const App: NextPage<Props> = (props) => (
  <div>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      <link href='https://fonts.googleapis.com/css?family=Noto+Sans+JP' rel='stylesheet' />
      <link href='https://fonts.googleapis.com/css?family=Comfortaa&display=swap' rel='stylesheet' />
      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:site' content='@waku_P' />
      <meta name='twitter:creator' content='@waku_P' />
      <meta property='og:title' content='みゆ開発室 official' />
      <meta property='og:type' content='website' />
      <meta property='og:url' content='https://www.miyulab.dev/' />
      <meta property='og:image' content='https://www.miyulab.dev/img/ogp.png' />
      <meta property='og:site_name' content='みゆ開発室 official' />
      <meta property='og:description' content='バーチャルWebエンジニアみゆ のオフィシャルサイトです。' />
    </Head>
    <section>
      {props.children}
    </section>
    <style jsx global>{`
      body {
        margin: 0;
        font-family: 'Noto Sans JP';
      }
      .wf-comfortaa {
        font-family: 'Comfortaa', cursive;
      }
      section {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        height: calc(100vh - 3rem);
      }
      a {
        color: #fa77fa;
        text-decoration: none;
      }
      @media (min-width: 768px) {
        section {
          margin: 0;
          height: 100vh;
        }
      }
    `}</style>
  </div>
);

export default App;
