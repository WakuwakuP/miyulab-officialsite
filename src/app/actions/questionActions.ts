import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export interface Question {
  id: string;
  answer: string;
  createdAt: string;
  public: boolean;
  question: string;
}

const questionActions = {
  getQuestionList: actionCreator<void>('QUESTION_GET_LIST'),
  getQuestionListFailure: actionCreator<void>('QUESTION_GET_LIST_Failure'),
  getQuestionListSuccess: actionCreator<Question[]>('QUESTION_GET_LIST_SUCCESS'),
};

export default questionActions;
