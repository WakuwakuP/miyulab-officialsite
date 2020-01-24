import { NextPage } from 'next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../../actions';
import { Question } from '../../../actions/questionActions';
import AdminQuestionCard from '../../atoms/admin/AdminQuestuinCard';
import LoginCheck from '../../atoms/LoginCheck';
import ScrollX from '../../atoms/ScrollX';
import Cards from '../Cards';
import AdminLogout from './AdminLogout';

interface Props {
  actions: any;
  state: any;
}

const AdminQuestionList: NextPage<Props> = (props) => {
  return (
    <LoginCheck>
      <ScrollX>
        <Cards>
          {
            props.state.auth.questions.map((q: Question) => {
              return (
                <AdminQuestionCard
                  key={q.id}
                  question={q.question}
                  answer={q.answer}
                  createdAt={q.createdAt}
                />
              );
            })
          }
        </Cards>
        <AdminLogout />
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
export default connect(mapStateToProps, mapDispatchToProps)(AdminQuestionList);
