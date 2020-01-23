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
  .case(questionActions.questionGetListSuccess, (state, questions) => {
    const errorMessage = undefined;
    return { ...state, errorMessage, questions };
  })
  .case(questionActions.questionGetListFailure, (state) => {
    return { ...state, errorMessage: 'ログインに失敗しました' };
  });
