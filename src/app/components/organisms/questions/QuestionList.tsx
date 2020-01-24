import { NextPage } from 'next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../../actions';
import { Question } from '../../../actions/questionActions';
import QuestionCard from '../../atoms/questions/QuestionCard';
import ScrollX from '../../atoms/ScrollX';
import Cards from '../Cards';

interface Props {
  actions: any;
  state: any;
}

const QuestionList: NextPage<Props> = (props) => {
  return (
    <ScrollX>
      <Cards>
        {
          props.state.question.questions.map((q: Question) => {
            return (
              <QuestionCard
                key={q.id}
                question={q.question}
                answer={q.answer}
                createdAt={q.createdAt}
              />
            );
          })
        }
      </Cards>
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
export default connect(mapStateToProps, mapDispatchToProps)(QuestionList);
