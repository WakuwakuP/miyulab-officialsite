import { PageTransition } from 'next-page-transitions';
import App from 'next/app';
import React from 'react';

import Background from '../components/atoms/Background';
import Main from '../components/Main';

export default class MyApp extends App {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps, router } = this.props;
    return (
      <div>
        <Background />
        <Main pathname={pageProps.pathname}>
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
      </div>
    );
  }
}
