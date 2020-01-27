import { register } from 'next-offline/runtime';
import React, { PureComponent } from 'react';

class SWRegister extends PureComponent {
  public componentDidMount() {
    register();
  }
  public render() {
    return <></>;
  }
}

export default SWRegister;
