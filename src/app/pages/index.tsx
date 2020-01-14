import { NextPage } from 'next';
import Head from 'next/head';

import App from '../components/App';

interface Props {
  pathname: string;
}

const Index: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <Head>
      <title>みゆ開発室</title>
    </Head>
    <div>
      <img src='/img/miyu.png' />
    </div>
    <style jsx>{`
      div {
        height: 100%;
      }
      img {
        width: 100%;
        height: calc(100vh - 3rem);
        object-fit: cover;
        object-position: 50% 0%;
      }
      @media (min-width: 768px) {
        img {
          height: 100%;
        }
      }
    `}</style>
  </App>
);

Index.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default Index;
