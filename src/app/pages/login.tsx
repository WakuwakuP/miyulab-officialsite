import { NextPage } from 'next';
import Head from 'next/head';

import App from '../components/App';
import LoginForm from '../components/organisms/LoginForm';

interface Props {
  pathname: string;
}

const Login: NextPage<Props> = ({ pathname }) => {
  return (
    <App pathname={pathname}>
      <Head>
        <title>Login - みゆ開発室</title>
      </Head>
      <LoginForm />
    </App>
  );
};

Login.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default Login;
