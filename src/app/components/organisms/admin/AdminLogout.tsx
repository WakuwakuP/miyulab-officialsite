import { NextPage } from 'next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../../actions';
import LogoutButton from '../../atoms/LogoutButton';

interface Props {
  actions: any;
  state: any;
}

const AdminLogout: NextPage<Props> = (props) => (
  <div>
    {
      props.state.auth.isLoggedIn ? (<div>
        <LogoutButton>Logout</LogoutButton>
      </div>) : undefined
    }
    <style jsx>{`
      div {
        padding-top: 3rem;
      }
    `}</style>
  </div>
);

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminLogout);
