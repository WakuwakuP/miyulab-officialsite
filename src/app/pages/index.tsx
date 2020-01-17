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
        <h1 className='wf-nicomoji'>みゆ開発室</h1>
        <span className='wf-comfortaa'>Miyu Dev room</span>
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
        color: #fa30fa;
        z-index: 1;
        text-align: center;
        transform:translateY(-100%);
      }
      .title > h1 {
        font-size: 5rem;
        margin: 0;
      }
      .title > span {
        font-size: 2rem;
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
        mix-blend-mode: color-burn;
      }
    `}</style>
  </App>
);

Index.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default Index;
