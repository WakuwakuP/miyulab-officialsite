import { NextPage } from 'next';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Actions from '../../actions';

interface Props {
  actions: any;
  state: any;
}

const QuestionList: NextPage<Props> = () => {
  return (
    <div>list test</div>
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
