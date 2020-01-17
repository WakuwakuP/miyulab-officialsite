import { NextPage } from 'next';
import Head from 'next/head';
import LazyLoad from 'react-lazyload';

import App from '../components/App';

interface Props {
  pathname: string;
}

const Profile: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <Head>
      <title>Profile - みゆ開発室</title>
    </Head>
    <div className='content'>
      <div className='profile'>
        <div className='profile-content'>
          <div className='Card'>
            <div className='table'>
              <table>
                <tr>
                  <td className='key'>名前</td>
                  <td className='value'>みゆ</td>
                </tr>
                <tr>
                  <td className='key'>年齢</td>
                  <td className='value'>16</td>
                </tr>
                <tr>
                  <td className='key'>性別</td>
                  <td className='value'>女の子</td>
                </tr>
                <tr>
                  <td className='key'>身長</td>
                  <td className='value'>154cm</td>
                </tr>
                <tr>
                  <td className='key'>体重</td>
                  <td className='value'>ないしょ!</td>
                </tr>
                <tr>
                  <td className='key'>活動内容</td>
                  <td className='value'>ライブコーディング, ゲーム</td>
                </tr>
                <tr>
                  <td className='key'>チャンネル</td>
                  <td className='value'>
                    <a href='https://www.youtube.com/channel/UC8moT0Z8Bc19IslrZp2jQJg' target='_blank'>
                      みゆ開発室
                      </a>
                  </td>
                </tr>
                <tr>
                  <td className='key'>ハッシュタグ</td>
                  <td className='value'>
                    <a href='https://twitter.com/search?q=%23%E3%81%BF%E3%82%86%E9%96%8B%E7%99%BA%E5%AE%A4' target='_blank'>
                      #みゆ開発室
                      </a>
                  </td>
                </tr>
              </table>
            </div>
            <div className='img-effect' />
          </div>

        </div>
      </div>
      <div className='img'>
        <LazyLoad>
          <img className='miyu' src='/img/miyu.png' alt='' />
        </LazyLoad>
      </div>
    </div>
    <style jsx>{`
      .content {
        position: relative;
        width: 100%;
        box-sizing: border-box;
        height: 100%;
        padding: 0;
      }

      .content .profile {
        position: absolute;
        width: 100%;
        bottom: 0;
      }
      .profile-content {
        position: relative;
        width: calc(100% - 1rem);
        max-width: 320px;
        margin: 0 auto 0.5rem;
        padding: 5px;
        box-sizing: border-box;
        box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.6);
      }
      .profile-content .table {
        color: #000000;
        text-shadow: 0px 0px 4px #ffffff;
      }
      .profile-content .img-effect {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: -1;
        background-color: rgba(256, 256, 256, 0.5);
        backdrop-filter: blur(5px);
      }

      .profile .key {
        width: 6rem;
        font-size: 0.9rem;
      }
      .content .img {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        right: 0;
        z-index: -2;
      }
      .content .img>div {
        width: 100%;
        height: 100%;
        margin: auto;
      }
      .img img {
        width: 100%;
        height: 100%;
        box-sizing: border-box;
        object-fit: cover;
        object-position: 50% 0;
      }

      a {
        transition: transform 100ms ease;
      }

      a:hover {
        display: inline-block;
        transform: rotate(-3deg);
        transform-origin: 0 50%;
      }
      @media (min-width: 768px) {
        .content {
          margin: 0;
          height: 100%;
        }
        .content .img>div {
          width: 100%;
        }
        .profile-content {
          margin: 0 0 0.5rem;
          max-width: initial;
          font-size: 1.3rem;
          width: 400px;
        }
        .profile .key {
          width: 7rem;
          font-size: 1.1rem;
        }
        .img img {
          padding: 0 1rem 0 3rem;
        }
      }
      @media (min-width: 1024px) {
        .content .img {
          width: 600px;
        }
        .profile-content {
          margin: 0 0 10vh;
        }
      }
    `}</style>
  </App>
);

Profile.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default Profile;
