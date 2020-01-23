import { NextPage } from 'next';
import Head from 'next/head';

import App from '../components/App';
import AdminQuestionList from '../components/organisms/admin/AdminQuestionList';

interface Props {
  pathname: string;
}

const Mypage: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <Head>
      <title>mypage - みゆ開発室</title>
    </Head>
    <AdminQuestionList />
  </App>
);

Mypage.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default Mypage;
