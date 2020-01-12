import { NextPage } from 'next';
import Head from 'next/head';
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';

interface Props {
  children: React.ReactNode;
  pathname: string;
}

const App: NextPage<Props> = (props) => (
  <div>
    <Head>
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
    <Header />
    <Main pathname={props.pathname}>
      {props.children}
    </Main>
    <Footer />
    <style jsx global>{`
      body {
        margin: 0;
      }
      a {
        color: #fa77fa;
        text-decoration: none;
      }
    `}</style>
  </div>
);

export default App;
