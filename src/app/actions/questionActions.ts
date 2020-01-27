import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory();

export interface Question {
  id: string;
  answer: string;
  createdAt: string;
  public: boolean;
  question: string;
}

export interface UpdateQuestion {
  id: string | string[];
  answer: string;
  public: boolean;
}

const questionActions = {
  createQuestion: actionCreator<string>('QUESTION_CREATE'),
  createQuestionFailure: actionCreator<void>('QUESTION_CREATE_FAILURE'),
  createQuestionSuccess: actionCreator<void>('QUESTION_CREATE_SUCCESS'),
  getQuestionList: actionCreator<void>('QUESTION_GET_LIST'),
  getQuestionListFailure: actionCreator<void>('QUESTION_GET_LIST_FAILURE'),
  getQuestionListSuccess: actionCreator<Question[]>('QUESTION_GET_LIST_SUCCESS'),
  updateQuestion: actionCreator<UpdateQuestion>('QUESTION_UPDATE'),
  updateQuestionFailure: actionCreator<void>('QUESTION_UPDATE_FAILURE'),
  updateQuestionSuccess: actionCreator<void>(`QUESTION_UPDATE_SUCCESS`),
};

export default questionActions;
