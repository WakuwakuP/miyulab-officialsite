import { NextPage } from 'next';
import Head from 'next/head';

import App from '../components/App';
import Card from '../components/atoms/Card';
import Cards from '../components/organisms/Cards';

interface Props {
  pathname: string;
}

const Link: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <Head>
      <title>リンク - みゆ開発室</title>
    </Head>
    <Cards>
      <Card title='title1' href='/'>
        content
      </Card>
      <Card title='title2' href='/'>
        content
      </Card>
    </Cards>
  </App>
);

Link.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default Link;
