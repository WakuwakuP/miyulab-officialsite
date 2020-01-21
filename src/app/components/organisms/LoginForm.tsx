import { NextPage } from 'next';
import Router from 'next/router';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions';
import { Login } from '../../actions/authActions';

interface Props {
  actions: any;
  state: any;
}

const LoginForm: NextPage<Props> = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (props.state.auth.isLoggedIn) {
      Router.push('/mypage', undefined, { shallow: true });
    }
  });

  const updateEmail = (e: { target: { value: string; }; }) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e: { target: { value: string; }; }) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    const login: Login = { email, password };
    props.actions.login(login);
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div>
        <input type='submit' value='ログイン' />
      </div>
    </form>
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
