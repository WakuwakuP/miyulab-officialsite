import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  href: string;
  src?: string;
  alt?: string;
}

const Card: FC<Props> = (props) => (
  <article>
    <a className='card' href={props.href} target='_blank'>
      <div className='card-box'>
        <div className='title data'>
          <h3>{props.title}</h3>
        </div>
        <div className='content data'>
          <p>
            {props.children}
          </p>
        </div>
        {
          props.src !== undefined
            ? <img src={props.src} alt={props.alt} />
            : <div className='effect' />
        }
      </div>
    </a>
    <style jsx>{`
      article {
        display: block;
        position: relative;
        width: 100%;
      }
      article:before {
        content: '';
        display: block;
        padding-bottom: 56.25%;
      }
      .card {
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        border-radius: 10px;
        margin: 1rem;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,.2), 0 4px 6px -2px rgba(0,0,0,.05);
      }
      .card-box {
        position: relative;
        height: 100%;
      }
      .card-box > .data {
        position: absolute;
        left: 0;
        right: 0;
        background-color: rgba(100, 100, 100, 0.4);
        color: #ffffff;
        padding: 0.5rem 0.7rem;
        z-index: 1;
        backdrop-filter: blur(5px);
      }
      .card-box > .title {
        top: 0;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
      }
      .card-box > .content {
        bottom: 0;
        border-bottom-left-radius: 9px;
        border-bottom-right-radius: 9px;
      }
      .card-box > .title > *,
      .card-box > .content > * {
        margin: 0;
      }
      .effect {
        position: absolute;
        z-index: -1;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        backdrop-filter: blur(50px);
      }
      img {
        position: absolute;
        z-index: -2;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
        border-radius: 9px;
        object-fit: cover;
      }
      @media (min-width: 1024px) {
        article {
          width: 50%;
        }
      }
    `}</style>
  </article>
);

export default Card;
