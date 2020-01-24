import { NextPage } from 'next';
import Head from 'next/head';

import App from '../components/App';
import Card from '../components/atoms/Card';
import ScrollX from '../components/atoms/ScrollX';
import Cards from '../components/organisms/Cards';

interface Props {
  pathname: string;
}

const Links: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <Head>
      <title>Link - みゆ開発室</title>
    </Head>
    <ScrollX>
      <Cards>
        <Card title='Youtube' href='https://www.youtube.com/channel/UC8moT0Z8Bc19IslrZp2jQJg' src='/img/youtube.jpg'>
          みゆ開発室
        </Card>
        <Card title='Twitter' href='https://twitter.com/waku_P'>
          みゆ@バーチャルWebエンジニア @waku_P
        </Card>
      </Cards>
    </ScrollX>
  </App>
);

Links.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default Links;
