import { NextPage } from 'next';

import App from '../components/App';

interface Props {
  pathname: string;
}

const Index: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <div>
      <img src='/img/miyu.png' />
    </div>
    <style jsx>{`
      div {
        height: 100vh;
      }
      img {
        width: 100%;
        height: calc(100vh - 3rem);
        object-fit: cover;
        object-position: 50% 0%;
      }
      @media (min-width: 768px) {
        img {
          height: 100vh;
        }
      }
    `}</style>
  </App>
);

Index.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default Index;
