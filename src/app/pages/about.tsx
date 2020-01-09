import { NextPage } from 'next';

import App from '../components/App';

interface Props {
  pathname: string;
}

const About: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <p>About Page</p>
  </App>
);

About.getInitialProps = ({ pathname }) => {
  return { pathname };
};

export default About;
