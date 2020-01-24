import { NextPage } from 'next';
import Head from 'next/head';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions';
import App from '../../components/App';
import QuestionList from '../../components/organisms/questions/QuestionList';

interface Props {
  pathname: string;
}

const QuestionIndex: NextPage<Props> = ({ pathname }) => {
  return (
    <App pathname={pathname}>
      <Head>
        <title>Login - みゆ開発室</title>
      </Head>
      <QuestionList />
    </App>
  );
};

QuestionIndex.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuestionIndex);
