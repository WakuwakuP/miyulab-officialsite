import { NextPage } from 'next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../../actions';
import { Question } from '../../../actions/questionActions';
import LoginCheck from '../../atoms/LoginCheck';
import ScrollX from '../../atoms/ScrollX';

interface Props {
  actions: any;
  state: any;
}

const QuestionList: NextPage<Props> = (props) => {
  return (
    <LoginCheck>
      <ScrollX>
        {
          props.state.question.questions.map((question: Question) => {
            return (
              <div key={question.id}>
                <div>question: {question.question}</div>
                <div>answer: {question.answer}</div>
                <div>created_at: {question.createdAt}</div>
              </div>
            );
          })
        }
      </ScrollX>
    </LoginCheck>
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
export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
