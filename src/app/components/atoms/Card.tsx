import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const Card: FC<Props> = (props) => (
  <button  {...props} className={props.isActive ? 'is-active' : ''} >
    {props.children}
    <div className='underline' />
  </button>
);

export default Card;
