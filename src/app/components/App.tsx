import { NextPage } from 'next';

import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
  pathname: string;
}

const App: NextPage<Props> = (props) => (
  <div>
    <Header pathname={props.pathname} />
    <main>
      {props.children}
    </main>
    <Footer pathname={props.pathname} />
  </div>
);

export default App;
