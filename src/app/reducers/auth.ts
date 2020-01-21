import { reducerWithInitialState } from 'typescript-fsa-reducers';
import authActions from '../actions/authActions';

export interface AuthState {
  displayName: string | undefined;
  email: string | undefined;
  errorMessage: string | undefined;
  isLoggedIn: boolean;
  photoURL: string | undefined;
  uid: string | undefined;
}

const initialState: AuthState = {
  displayName: '',
  email: '',
  errorMessage: '',
  isLoggedIn: false,
  photoURL: '',
  uid: '',
};

export const authReducer = reducerWithInitialState(initialState)
  .case(authActions.loginSuccess, (state, { displayName, email, photoURL, uid }) => {
    const isLoggedIn = true;
    return { ...state, displayName, email, photoURL, uid, isLoggedIn };
  })
  .case(authActions.loginFailure, (state) => {
    return { ...state, errorMessage: 'ログインに失敗しました' };
  })
  .case(authActions.logoutSuccess, (state) => {
    const isLoggedIn = false;
    const displayName = '';
    const email = '';
    const photoURL = '';
    const uid = '';
    return { ...state, displayName, email, photoURL, uid, isLoggedIn };
  })
  .case(authActions.loginFailure, (state) => {
    return { ...state, errorMessage: 'ログアウトに失敗しました' };
  });
