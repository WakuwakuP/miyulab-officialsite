import { NextPage } from 'next';

import App from '../components/App';

interface Props {
  pathname: string;
}

const Index: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <img src='/img/miyu.png' alt='みゆ立ち絵' />
  </App>
);

Index.getInitialProps = ({ pathname }) => {
  return { pathname };
};

export default Index;
