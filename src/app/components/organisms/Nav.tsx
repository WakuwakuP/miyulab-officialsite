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
          <NavButton isActive={props.pathname === '/'}>Home</NavButton>
        </Link>
      </div>
      <div>
        <Link href='/profile'>
          <NavButton isActive={props.pathname === '/profile'}>Profile</NavButton>
        </Link>
      </div>
      <div>
        <Link href='/links'>
          <NavButton isActive={props.pathname === '/links'}>Link</NavButton>
        </Link>
      </div>
      {
        props.state.auth.isLoggedIn ? (<div>
          <Link href='/mypage'>
            <NavButton isActive={props.pathname === '/mypage'}>My page</NavButton>
          </Link>
        </div>) : undefined
      }

      <style jsx>{`
          .header {
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
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
