import { combineReducers } from 'redux';

import { authReducer, AuthState } from './auth';
import { uiReducer, UiState } from './ui';

export interface AppState {
  auth: AuthState;
  ui: UiState;
}

const reducers = combineReducers<AppState>({
  auth: authReducer,
  ui: uiReducer,
});

export default reducers;
