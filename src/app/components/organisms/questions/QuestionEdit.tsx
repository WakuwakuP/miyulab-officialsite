import { NextPage } from 'next';
import Router from 'next/router';
import { useState } from 'react';
import { connect } from 'react-redux';
import TextareaAutosize from 'react-textarea-autosize';
import { bindActionCreators } from 'redux';

import Actions from '../../../actions';
import ScrollX from '../../atoms/ScrollX';

interface Props {
  id: string | string[];
  actions: any;
  state: any;
}

const QuestionEdit: NextPage<Props> = (props) => {
  const q = props.state.auth.questions.find((data) => {
    return data.id === props.id;
  }) || { question: '', answer: '', public: false, createdAt: '' };
  const question = q.question;
  const [answer, setAnswer] = useState(q.answer);
  const [questionPublic, setPublic] = useState(q.public);
  const [submited, setSubmited] = useState(false);
  const createdAt = q.createdAt;

  const updatePublic = (e: { target: { checked: boolean } }) => {
    setPublic(e.target.checked);
  };

  const updateAnswer = (e: { target: { value: string } }) => {
    setAnswer(e.target.value);
  };

  const submitQuestion = () => {
    setSubmited(true);
    props.actions.updateQuestion({
      answer,
      id: props.id,
      public: questionPublic,
    });
    Router.push('/mypage', undefined, { shallow: true });
  };

  return (
    <ScrollX>
      <article>
        <label>
          <div className='card-box'>
            <div className='question'>
              <div>
                {question}
              </div>
            </div>
            <div className='answer'>
              <div>
                <TextareaAutosize
                  id='textarea'
                  className='textarea'
                  onChange={updateAnswer}
                  value={answer}
                />
              </div>
            </div>

            <div className='created-at'>
              {createdAt}
            </div>
          </div>
        </label>
      </article>
      <div className='checkbox-area'>
        <div className='checkbox-label'>Public</div>
        <div className='app_checkbox'>
          <input
            id='sample1'
            type='checkbox'
            checked={questionPublic}
            onChange={updatePublic}
          />
          <label htmlFor='sample1' />
        </div>
      </div>

      {
        !submited
          ? <button className='input-button' onClick={submitQuestion}>Update</button>
          : undefined
      }

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
          width: calc(100% - 2rem);
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
        .checkbox-area {
          display: flex;
          justify-content: center;
          font-size: 1.5rem;
          padding-top: 1rem;
        }
        .checkbox-label {
          padding-top: 0.4rem;
          padding-right: 1rem;
        }
        .app_checkbox input[type="checkbox"]{
          display: none;
        }
        .app_checkbox input[type="checkbox"]+label{
          cursor: pointer;
          display: inline-block;
          box-sizing: content-box;
          position: relative;
          width: 60px;
          height: 30px;
          background-color: #FFF;
          border: 2px solid #CCC;
          border-radius: 30px;
        }
        .app_checkbox input[type="checkbox"]:checked+label{
          background-color: #00BCD4;
          border-color: #00BCD4;
        }
        .app_checkbox input[type="checkbox"]+label:before{
          content: "";
          position: absolute;
          display: block;
          width: 30px;
          height: 30px; /* widthと同じ 上のラベルの高さに揃える */
          left: 0;
          top: 0;
          border-radius: 50%;
          background-color: #FFF;
          box-shadow: 2px 2px 4px gray;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
        }
        .app_checkbox input[type="checkbox"]:checked+label:before{
          -webkit-transform: translateX(100%);
          transform: translateX(100%);
          box-shadow: none;
          -webkit-transition: all 0.3s ease;
          transition: all 0.3s ease;
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
export default connect(mapStateToProps, mapDispatchToProps)(QuestionEdit);
