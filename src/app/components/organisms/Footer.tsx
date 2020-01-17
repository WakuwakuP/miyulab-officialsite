import { NextPage } from 'next';

const Footer: NextPage = () => (
  <footer className='footer'>
    <div className='sitename'>
      <p>みゆ開発室</p>
    </div>
    <style jsx>{`
      .footer {
        background-color: #00B7CE;
        color: #ffffff;
        padding: 1rem 2rem 1.5rem;
      }
      .footer .sitename {
        font-size: 1.6rem;
      }
    `}</style>
  </footer>
);

export default Footer;
