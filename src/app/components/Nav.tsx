import { NextPage } from 'next';
import Link from 'next/link';

interface Props {
  pathname: string;
}

const Nav: NextPage<Props> = (props) => (
  <header className='header'>
    <div>
      <Link href='/'>
        <button className={props.pathname === '/' ? 'is-active' : ''}>Home</button>
      </Link>
    </div>
    <div>
      <Link href='/profile'>
        <button className={props.pathname === '/profile' ? 'is-active' : ''}>Profile</button>
      </Link>
    </div>
    <div>
      <Link href='/link'>
        <button className={props.pathname === '/link' ? 'is-active' : ''}>Link</button>
      </Link>
    </div>
    <style jsx>{`
      .header {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
      }
      .header button {
        border: solid 1px #fa77fa;
        background-color: #ffffff;
        color: #fa77fa;
        font-size: 1.3rem;
        text-align: center;
        height: 3rem;
        width: 100%;
      }
      .header button.is-active {
        border: solid 1px #fa77fa;
        background-color: #fa77fa;
        color: #ffffff;
      }
      .header button:focus {
        outline: none;
      }
      @media (min-width: 1024px) {
        .header {
          display: block;
          width: 341px;
        }
        .header button {
          text-align: center;
          width: 80%;
          margin: 0.5rem 10%;
        }
      }
    `}</style>
  </header>
);

export default Nav;
