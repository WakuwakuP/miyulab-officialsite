import { NextPage } from 'next';
import Router from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions';

interface Props {
  actions: any;
  state: any;
}

const LoginCheck: NextPage<Props> = (props) => {

  useEffect(() => {
    if (!props.state.auth.isLoggedIn) {
      Router.push('/', undefined, { shallow: true });
    }
  });

  return (
    <div>
      {
        props.state.auth.isLoggedIn
          ? props.children
          : undefined
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginCheck);
