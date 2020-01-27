import { NextPage } from 'next';
import Router from 'next/router';
import { useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { bindActionCreators } from 'redux';

import Actions from '../../../actions';
import ScrollX from '../../atoms/ScrollX';

interface Props {
  actions: any;
  state: any;
}

const QuestionCreate: NextPage<Props> = (props) => {
  const [question, setQuestion] = useState('');
  const [recaptcha, setRecaptcha] = useState(false);
  const [submited, setSubmited] = useState(false);

  const updateQuestion = (e: { target: { value: string } }) => {
    setQuestion(e.target.value);
  };

  const submitQuestion = () => {
    setSubmited(true);
    props.actions.createQuestion(question);
    Router.push('/question', undefined, { shallow: true });
  };

  const updateRecaptcha = () => {
    setRecaptcha(true);
  };

  return (
    <ScrollX>
      <article>
        <label>
          <div className='card-box'>
            <div className='label'>質問内容</div>
            <div className='question'>
              <div>
                <TextareaAutosize
                  id='textarea'
                  className='textarea'
                  onChange={updateQuestion}
                  value={question}
                />
              </div>
            </div>
          </div>
        </label>
        {
          recaptcha
            ? <button className='input-button' onClick={submitQuestion} disabled={submited}>質問を投稿</button>
            : <ReCAPTCHA
              sitekey='6LfICdMUAAAAAKgjzutHuXuYlh_BF17TpzN-o82f'
              onChange={updateRecaptcha}
            />
        }

      </article>

      <style jsx>{`
        article {
          box-sizing: border-box;
          display: block;
          position: relative;
          width: 100%;
          padding: 2rem 0.5rem 0.5rem;
        }
        .label {
          padding: 0.2rem 0.5rem;
          color: #ffffff;
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
          border-bottom-left-radius: 0.8rem;
          border-bottom-right-radius: 0.8rem;
          background-color: #ffffff;
          padding: 0.5rem;
          margin: 0.2rem;
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
          width: calc(100% - 2rem);
        }
        .input-button {
          box-sizing: border-box;
          background-color: unset;
          border: solid 2px #00BCD4;
          border-radius: 1.375rem;
          color: #00BCD4;
          font-size: 1.2rem;
          padding: 0.5rem 1rem;
          transition: 0.2s all;
          margin: 1rem 0 0 9rem;
        }

        .input-button:hover,
        .imput-button:focus {
          background-color: #00BCD4;
          color: white;
        }
      `}</style>
      <style jsx global>{`
        textarea.textarea {
          box-sizing: border-box;
          border: none;
          resize: none;
          width: 100%;
          font-family : inherit;
          font-size: 1.4rem;
        }
        textarea.textarea:focus {
          outline: none;
        }
      `}</style>
    </ScrollX>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(Actions, dispatch),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(QuestionCreate);
