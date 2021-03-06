import { FC, HTMLAttributes } from 'react';

const Cards: FC<HTMLAttributes<HTMLElement>> = (props) => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        display: flex;
        flex-wrap: wrap;
      }
    `}</style>
  </div>
);

export default Cards;
