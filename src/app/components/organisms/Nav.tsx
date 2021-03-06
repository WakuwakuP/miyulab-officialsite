import { NextPage } from 'next';
import Link from 'next/link';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions';
import NavButton from '../atoms/NavButton';

interface Props {
  pathname: string;
  actions: any;
  state: any;
}

const Nav: NextPage<Props> = (props) => {
  return (
    <header className='header'>
      <div>
        <Link href='/'>
          <a>
            <NavButton active={props.pathname === '/'}>Home</NavButton>
          </a>
        </Link>
      </div>
      <div>
        <Link href='/profile'>
          <a>
            <NavButton active={props.pathname === '/profile'}>Profile</NavButton>
          </a>
        </Link>
      </div>
      <div>
        <Link href='/question'>
          <a>
            <NavButton active={props.pathname === '/question'}>Question</NavButton>
          </a>
        </Link>
      </div>
      {
        props.state.auth.isLoggedIn
          ? (<div>
            <Link href='/mypage'>
              <a>
                <NavButton active={props.pathname === '/mypage'}>My page</NavButton>
              </a>
            </Link>
          </div>)
          : (<div>
            <Link href='/login'>
              <a>
                <NavButton active={props.pathname === '/login'}>Login</NavButton>
              </a>
            </Link>
          </div>)
      }

      <style jsx>{`
          .header {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr 1fr;
          }
          @media (min-width: 768px) {
            .header {
              display: block;
              margin-top: 3rem;
            }
            .header > div {
              margin: 0.5rem;
            }
          }
        `}</style>
    </header>
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
