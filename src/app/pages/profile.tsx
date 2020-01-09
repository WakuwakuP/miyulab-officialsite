import { NextPage } from 'next';

import App from '../components/App';

interface Props {
  pathname: string;
}

const Profile: NextPage<Props> = ({ pathname }) => (
  <App pathname={pathname}>
    <p>プロフィール</p>
  </App>
);

Profile.getInitialProps = ({ pathname }) => {
  return { pathname };
};

export default Profile;
