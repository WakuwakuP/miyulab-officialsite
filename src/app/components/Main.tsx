import { NextPage } from 'next';

import Nav from './organisms/Nav';

interface Props {
  children: React.ReactNode;
  pathname: string;
}

const App: NextPage<Props> = (props) => (
  <main className='main'>
    <Nav pathname={props.pathname} />
    {props.children}
    <style jsx>{`
      .main {
        width: 100%;
        margin: 0 auto;
      }
      @media (min-width: 768px) {
        .main {
          display: grid;
          grid-template-columns: 200px 1fr;
          width: 100%;
        }
      }

      @media (min-width: 1024px) {
        .main {
          width: 1024px;
        }
      }
    `}</style>
  </main>
);

export default App;
