import { NextPage } from 'next';

interface Props {
  children: React.ReactNode;
  pathname: string;
}

const App: NextPage<Props> = (props) => (
  <main className='main'>
    {props.children}
    <style jsx>{`
      .main {
        width: 100%
      }
      @media (min-width: 1024px) {
        .main {
          display: flex;
          width: 1024px;
        }
      }
    `}</style>
  </main>
);

export default App;
