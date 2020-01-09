import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  pathname: string;
}

const Footer: NextPage<Props> = (props) => (
  <footer>
    <Link href='/'>
      <a className={props.pathname === '/' ? 'is-active' : ''}>Home</a>
    </Link>
    <Link href='/profile'>
      <a className={props.pathname === '/profile' ? 'is-active' : ''}>Profile</a>
    </Link>
    <Link href='/about'>
      <a className={props.pathname === '/about' ? 'is-active' : ''}>About</a>
    </Link>
  </footer>
);

export default Footer;
