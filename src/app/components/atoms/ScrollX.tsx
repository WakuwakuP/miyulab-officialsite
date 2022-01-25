import { FC, HTMLAttributes } from 'react';

const ScrollX: FC<HTMLAttributes<HTMLElement>> = (props) => (
  <div>
    {props.children}
    <style jsx>{`
      div {
        overflow-x: auto;
        height: 100%;
      }
      div::-webkit-scrollbar {
        display:none;
      }
    `}</style>
  </div>
);

export default ScrollX;
