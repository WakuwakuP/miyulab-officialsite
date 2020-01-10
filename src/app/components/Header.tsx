import { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => (
  <header>
    <Link href='/'>
      <h1>みゆ開発室</h1>
    </Link>
  </header>
);

export default Header;
