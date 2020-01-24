import { reducerWithInitialState } from 'typescript-fsa-reducers';
import questionActions, { Question } from '../actions/questionActions';

export interface QuestionState {
  errorMessage: string | undefined;
  questions: Question[];
}

const initialState: QuestionState = {
  errorMessage: '',
  questions: [],
};

export const questionReducer = reducerWithInitialState(initialState)
  .case(questionActions.getQuestionListSuccess, (state, questions) => {
    const errorMessage = undefined;
    return { ...state, errorMessage, questions };
  })
  .case(questionActions.getQuestionListFailure, (state) => {
    return { ...state, errorMessage: '質問箱の取得に失敗しました' };
  });
