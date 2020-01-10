import { NextPage } from 'next';
import React from 'react';

import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import Nav from './Nav';

interface Props {
  children: React.ReactNode;
  pathname: string;
}

const App: NextPage<Props> = (props) => (
  <div>
    <Header />
    <Main pathname={props.pathname}>
      <Nav pathname={props.pathname} />
      {props.children}
    </Main>
    <Footer />
  </div>
);

export default App;
