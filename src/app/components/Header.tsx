import { NextPage } from 'next';
import Link from 'next/link';

const Header: NextPage = () => (
  <header>
    <Link href='/'>
      <h1 className='title'>みゆ開発室</h1>
    </Link>
    <style jsx>{`
      .title {
        width:100%;
        margin: 0.5rem 0;
      }
      @media (min-width: 820px) {
        .title {
          max-width: 1240px;
          margin: auto;
        }
      }
    `}</style>
  </header>
);

export default Header;
