import { NextPage } from 'next';
import Head from 'next/head';
import LazyLoad from 'react-lazyload';

import App from '../components/App';

interface Props {
  pathname: string;
}

const Index: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <Head>
      <title>みゆ開発室 official</title>
    </Head>
    <div className='content'>
      <div className='title'>
        <h1 className='wf-comfortaa'>Miyu Dev room</h1>
      </div>
      <LazyLoad>
        <img src='/img/miyu_silhouette.png' />
      </LazyLoad>
    </div>
    <style jsx>{`
      div.content {
        position: relative;
        height: 100%;
      }
      .title {
        position: absolute;
        top: 50%;
        left: 0;
        right:0;
        color: #00ACC1;
        z-index: 1;
        text-align: center;
        transform:translateY(-100%);
      }
      .title > h1 {
        font-size: 4rem;
        margin: 0;
      }
      .title > span {
        font-size: 1.8rem;
      }
      img {
        position: absolute;
        box-sizing: border-box;
        padding: 5rem;
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: 50% 0%;
        z-index: -1;
        opacity: 0.6;
        mix-blend-mode: color-burn;
      }
      @media (min-width: 768px) {
        .title > h1 {
          font-size: 6rem;
          margin: 0;
        }
        .title > span {
          font-size: 2rem;
        }
      }
    `}</style>
  </App>
);

Index.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default Index;
