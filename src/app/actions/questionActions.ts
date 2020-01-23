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
  questionGetList: actionCreator<void>('QUESTION_GET_LIST'),
  questionGetListFailure: actionCreator<void>('QUESTION_GET_LIST_Failure'),
  questionGetListSuccess: actionCreator<Question[]>('QUESTION_GET_LIST_SUCCESS'),
};

export default questionActions;
