import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
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
        <title>Question Box - みゆ開発室</title>
      </Head>
      <QuestionList />
      <div className='create-button-box'>
        <div className='create-button'>
          <Link href='question/create'>
            <a>
              <div className='button'>
                <div className='bar-1' />
                <div className='bar-2' />
              </div>
            </a>
          </Link>
        </div>
      </div>
      <style jsx>{`
        .create-button-box {
          position: relative;
        }
        .create-button {
          position: fixed;
          z-index: 1000;
          right: 0;
          bottom: 0;
          padding-right: 2rem;
          padding-bottom: 5rem;
        }
        a {
          display: block;
          width: 4rem;
          height: 4rem;
          background-color: #00BCD4;
          border-radius: 50%;
          color: #ffffff;
        }
        .button {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .bar-1 {
          position: absolute;
          top: 50%;
          left: 50%;
          background-color: #ffffff;
          border-radius: 0.2rem;
          width: 2rem;
          height: 0.4rem;
          transform: translateX(-50%) translateY(-50%);
        }
        .bar-2 {
          position: absolute;
          top: 50%;
          left: 50%;
          background-color: #ffffff;
          border-radius: 0.2rem;
          width: 2rem;
          height: 0.4rem;
          transform: translateX(-50%) translateY(-50%) rotate(90deg);
        }
      `}</style>
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
