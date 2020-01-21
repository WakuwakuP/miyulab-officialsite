import { PageTransition } from 'next-page-transitions';
import withReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';

import createStore from '../store';

import Background from '../components/atoms/Background';
import Main from '../components/Main';

interface Props {
  Component: React.Component;
  store: any;
}

class MyApp extends App<Props> {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps, router, store } = this.props;
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default withRedux(createStore)(withReduxSaga(MyApp));
