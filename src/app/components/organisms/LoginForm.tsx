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
      <div className='data-area'>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          name='email'
          id='email'
          className='input-textbox'
          value={email}
          onChange={updateEmail}
        />
      </div>
      <div className='data-area'>
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          name='password'
          id='password'
          className='input-textbox'
          value={password}
          onChange={updatePassword}
        />
      </div>
      <div>
        <input className='input-button' type='submit' value='ログイン' />
      </div>
      <style jsx>{`
        form {
          padding: 20vh 1rem 0;
        }
        .data-area {
          padding-top: 1rem;
        }
        .data-area > label {
          display: inline-block;
          font-size: 1.4rem;
          width: 9rem;
        }
        .input-textbox {
          box-sizing: border-box;
          background-color: unset;
          border: solid 2px #00BCD4;
          border-radius: 1.2rem;
          color: #00BCD4;
          font-size: 1.2rem;
          padding: 0.5rem;
          width: 100%;
        }
        .input-button {
          box-sizing: border-box;
          background-color: unset;
          border: solid 2px #00BCD4;
          border-radius: 1.375rem;
          color: #00BCD4;
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
          transition: 0.2s all;
          margin: 1rem 0 0 9rem;
        }

        .input-button:hover,
        .imput-button:focus {
          background-color: #00BCD4;
          color: white;
        }

        input:focus {
          outline: none;
        }

        @media (min-width: 768px) {
          .input-textbox {
            width: 23rem;
          }
        }
      `}</style>
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
