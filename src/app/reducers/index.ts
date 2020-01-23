import { combineReducers } from 'redux';

import { authReducer, AuthState } from './auth';
import { questionReducer, QuestionState } from './question';
import { uiReducer, UiState } from './ui';

export interface AppState {
  auth: AuthState;
  question: QuestionState;
  ui: UiState;
}

const reducers = combineReducers<AppState>({
  auth: authReducer,
  question: questionReducer,
  ui: uiReducer,
});

export default reducers;
