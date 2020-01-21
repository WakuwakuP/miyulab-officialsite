import { NextPage } from 'next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions';

interface Props {
  actions: any;
  state: any;
}

const LogoutButton: NextPage<Props> = (props) => {
  const onClickGoogleLogin = (e) => {
    props.actions.loginGoogle();
    e.preventDefault();
  };

  return (
    <button onClick={onClickGoogleLogin}>
      {props.children || 'Google Login'}
      <div className='underline' />
      <style jsx>{`
        button {
          display: block;
          position: relative;
          border: none;
          background-color: rgba(0, 0, 0, 0);
          color: #00BCD4;
          font-size: 1.3rem;
          text-align: center;
          height: 3rem;
          width: 100%;
          margin: auto;
          font-family: 'Comfortaa', cursive;
        }
        button:focus {
          outline: none;
        }
        button > .underline {
          box-sizing: border-box;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 3rem;
          margin: auto;
          z-index: -1;
          border-top: solid 2px #00BCD4;
          border-bottom: solid 2px #00BCD4;
          transition: width 150ms ease;
        }
        button.is-active > .underline {
          width: 100%;
          border-left: solid 2px #00BCD4;
          border-right: solid 2px #00BCD4;
          backdrop-filter: blur(50px);
        }
        button:not(.is-active) > .underline {
          width: 0;
        }
        button:hover:not(.is-active) > .underline {
          width: 100%;
        }
        button:active:hover:not(.is-active) > .underline {
          border-left: solid 2px #00BCD4;
          border-right: solid 2px #00BCD4;
        }
      `}</style>
    </button>
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

export default connect(mapStateToProps, mapDispatchToProps)(LogoutButton);
