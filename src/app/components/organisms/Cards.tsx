import { FC, HTMLAttributes } from 'react';

const Cards: FC<HTMLAttributes<HTMLElement>> = (props) => (
  <div>
    {props.children}
  </div>
);

export default Cards;
