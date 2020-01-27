import { NextPage } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';

import App from '../../../components/App';
import QuestionEdit from '../../../components/organisms/questions/QuestionEdit';

interface Props {
  pathname: string;
}

const QuestionIndex: NextPage<Props> = ({ pathname }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <App pathname={pathname}>
      <Head>
        <title>Question edit - みゆ開発室</title>
      </Head>
      <QuestionEdit id={id} />
    </App>
  );
};

QuestionIndex.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default QuestionIndex;
