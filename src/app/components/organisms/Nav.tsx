import { NextPage } from 'next';
import Link from 'next/link';
import NavButton from '../atoms/NavButton';

interface Props {
  pathname: string;
}

const Nav: NextPage<Props> = (props) => (
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

export default Nav;
