import { combineReducers } from 'redux';

import { authReducer, AuthState } from './auth';

export interface AppState {
  auth: AuthState;
}

const reducers = combineReducers<AppState>({
  auth: authReducer,
});

export default reducers;
