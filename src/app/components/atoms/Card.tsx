import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  href: string;
  src?: string;
  alt?: string;
}

const Card: FC<Props> = (props) => (
  <article>
    <div className='card'>
      <a href={props.href}>
        <h3>{props.title}</h3>
        <div>
          {props.src !== undefined ? <img src={props.src} alt={props.alt} /> : undefined}
          <p>
            {props.children}
          </p>
        </div>
      </a>
    </div>
    <style jsx>{`
      article {
        display: block;
      }
      .card {
        border-radius: 0.5rem;
        border solid 1px #edf2f7;
        padding: .3rem;
        margin: 1rem;
        box-shadow: 0 10px 15px -3px rgba(0,0,0,.1), 0 4px 6px -2px rgba(0,0,0,.05);
      }
      h3 {
        margin: 0;
      }
    `}</style>
  </article>
);

export default Card;
