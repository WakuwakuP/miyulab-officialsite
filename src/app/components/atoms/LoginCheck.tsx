import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions';

interface Props {
  actions: any;
  state: any;
}

const LoginCheck: NextPage<Props> = (props) => {
  const router = useRouter();
  useEffect(() => {
    if (!props.state.auth.isLoggedIn && props.state.auth.check) {
      process.nextTick(() => {
        router.replace('/');
      });
    }
  });

  return (
    <div>
      {props.children}
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
