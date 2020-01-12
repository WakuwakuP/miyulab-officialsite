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
    {props.children}
    <style jsx global>{`
      body {
        margin: 0;
        font-family: "Noto Sans JP";
      }
      a {
        color: #fa77fa;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default App;
