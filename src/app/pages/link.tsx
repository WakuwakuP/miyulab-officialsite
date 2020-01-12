import { NextPage } from 'next';

import App from '../components/App';

interface Props {
  pathname: string;
}

const Link: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <p>About Page</p>
  </App>
);

Link.getInitialProps = async ({ pathname }) => {
  return { pathname };
};

export default Link;
