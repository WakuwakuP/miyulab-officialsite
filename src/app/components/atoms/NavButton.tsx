import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive: boolean;
}

const NavButton: FC<Props> = (props) => (
  <button  {...props} className={props.isActive ? 'is-active' : ''} >
    {props.children}
    <div className='underline' />
    <style jsx>{`
      button {
        display: block;
        position: relative;
        border: none;
        background-color: #ffffff;
        color: #fa77fa;
        font-size: 1.3rem;
        text-align: center;
        height: 3rem;
        width: 7rem;
        margin: auto;
      }
      button:focus {
        outline: none;
      }
      button > .underline {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 2.6rem;
        margin: auto;
        z-index: 1;
        border-top: solid 2px #fa77fa;
        border-bottom: solid 2px #fa77fa;
        background-color: rgba(255, 255, 255, 0);
        transition: width 150ms ease;
      }
      button.is-active > .underline {
        width: 7rem;
        border-left: solid 2px #fa77fa;
        border-right: solid 2px #fa77fa;
      }
      button:not(.is-active) > .underline {
        width: 0;
      }
      button:hover:not(.is-active) > .underline {
        width: 7rem;
      }
      button:active:hover:not(.is-active) > .underline {
        border-left: solid 2px #fa77fa;
        border-right: solid 2px #fa77fa;
      }
    `}</style>
  </button>
);

export default NavButton;
