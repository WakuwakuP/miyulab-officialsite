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
    </Head>
    <section>
      {props.children}
    </section>
    <style jsx global>{`
      body {
        margin: 0;
        font-family: "Noto Sans JP";
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
