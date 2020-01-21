import { ButtonHTMLAttributes, FC } from 'react';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const NavButton: FC<Props> = (props) => (
  <button className={props.active ? 'is-active' : ''} >
    {props.children}
    <div className='underline' />
    <style jsx>{`
      button {
        display: block;
        position: relative;
        border: none;
        background-color: rgba(0, 0, 0, 0);
        color: #00BCD4;
        font-size: 1.3rem;
        text-align: center;
        height: 3rem;
        width: 100%;
        margin: auto;
        font-family: 'Comfortaa', cursive;
      }
      button:focus {
        outline: none;
      }
      button > .underline {
        box-sizing: border-box;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 3rem;
        margin: auto;
        z-index: -1;
        border-top: solid 2px #00BCD4;
        border-bottom: solid 2px #00BCD4;
        transition: width 150ms ease;
      }
      button.is-active > .underline {
        width: 100%;
        border-left: solid 2px #00BCD4;
        border-right: solid 2px #00BCD4;
        backdrop-filter: blur(50px);
      }
      button:not(.is-active) > .underline {
        width: 0;
      }
      button:hover:not(.is-active) > .underline {
        width: 100%;
      }
      button:active:hover:not(.is-active) > .underline {
        border-left: solid 2px #00BCD4;
        border-right: solid 2px #00BCD4;
      }
    `}</style>
  </button>
);

export default NavButton;
