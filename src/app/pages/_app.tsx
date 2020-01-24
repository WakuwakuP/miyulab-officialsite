import { PageTransition } from 'next-page-transitions';
import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import Head from 'next/head';
import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store';

import Background from '../components/atoms/Background';
import SWRegister from '../components/atoms/SWRegister';
import Main from '../components/Main';

interface Props {
  Component: React.Component;
  store: any;
}

class MyApp extends App<Props> {
  public render() {
    const { Component, pageProps, router, store } = this.props;
    return (
      <Provider store={store}>
        <Head>
          <link rel='manifest' href='/manifest.json' />
          <link rel='apple-touch-icon' href='/images/icons/icon-72x72.png' sizes='72x72' />
          <link rel='apple-touch-icon' href='/images/icons/icon-114x114.png' sizes='114x114' />
          <link rel='apple-touch-icon' href='/images/icons/icon-120x120.png' sizes='120x120' />
          <link rel='apple-touch-icon' href='/images/icons/icon-144x144.png' sizes='144x144' />
        </Head>
        <Background />
        <Main pathname={router.pathname}>
          <PageTransition timeout={300} classNames='page-transition'>
            <Component {...pageProps} key={router.route} />
          </PageTransition>
          <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 150ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 150ms;
          }
        `}</style>
        </Main>
        <SWRegister />
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
