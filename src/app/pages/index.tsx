import { NextPage } from 'next';

import App from '../components/App';

interface Props {
  pathname: string;
}

const Index: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <p>ホームページ</p>
  </App>
);

Index.getInitialProps = ({ pathname }) => {
  return { pathname };
};

export default Index;
