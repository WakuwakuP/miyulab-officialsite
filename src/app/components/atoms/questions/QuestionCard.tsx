import { FC, HTMLAttributes } from 'react';

interface Props extends HTMLAttributes<HTMLElement> {
  question: string;
  answer: string;
  createdAt?: string;
}

const QuestionCard: FC<Props> = (props) => (
  <article>
    <div className='card-box'>
      <div className='question'>
        {props.question}
      </div>
      <div className='answer'>
        {props.answer}
      </div>
      <div className='created-at'>
        {props.createdAt}
      </div>
    </div>
    <style jsx>{`
      article {
        box-sizing: border-box;
        display: block;
        position: relative;
        width: 100%;
        padding: 0.7rem 0.5rem;
      }
      .card-box {
        position: relative;
        border: solid 1px #00BCD4;
        border-radius: 1rem;
        background-color: #00BCD4;
      }
      .question {
        display: flex;
        font-family: 'Noto Sans JP';
        border-top-left-radius: 0.8rem;
        border-top-right-radius: 0.8rem;
        background-color: #ffffff;
        padding: 0.5rem;
        margin: 0.2rem;
        white-space: pre-wrap;
      }
      .question:before {
        display: block;
        width: 2rem;
        height: 2rem;
        content: 'Q';
        color: #388E3C;
        font-family: 'Comfortaa','Mamelon';
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
      }
      .question > div {
        display: block;
      }
      .answer {
        display: flex;
        font-family: 'Noto Sans JP';
        border-bottom-left-radius: 0.8rem;
        border-bottom-right-radius: 0.8rem;
        background-color: #ffffff;
        padding: 0.5rem;
        margin: 0.2rem;
        white-space: pre-wrap;
      }
      .answer:before {
        display: block;
        width: 2rem;
        height: 2rem;
        content: 'A';
        color: #E64A19;
        font-family: 'Comfortaa','Mamelon';
        font-size: 2rem;
        font-weight: bold;
        text-align: center;
      }
      .answer > div {
        display: block;
      }
      .created-at {
        position: absolute;
        border: solid 1px #00BCD4;
        border-radius: 0.8rem;
        background-color: #00BCD4;
        font-size: 0.8rem;
        color: #ffffff;
        right: 0;
        bottom: 0;
        padding: 0.3rem;
        text-align: right;
        transform: translateX(-0.3rem) translateY(1rem);
      }

      @media (min-width: 1024px) {
        article {
          width: 50%;
        }
      }
    `}</style>
  </article>
);

export default QuestionCard;
