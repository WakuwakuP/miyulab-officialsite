import React, { PureComponent } from 'react';

class SWRegister extends PureComponent {
  public componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('/sw.js')
        .then(() => {
          // tslint:disable-next-line: no-console
          console.log('service worker registration successful');
        })
        .catch((err) => {
          // tslint:disable-next-line: no-console
          console.warn('service worker registration failed', err.message);
        });
    }
  }
  public render() {
    return <></>;
  }
}

export default SWRegister;
