import { reducerWithInitialState } from 'typescript-fsa-reducers';
import authActions from '../actions/authActions';
import { Question } from '../actions/questionActions';

export interface AuthState {
  check: boolean;
  displayName: string | undefined;
  email: string | undefined;
  errorMessage: string | undefined;
  isLoggedIn: boolean;
  photoURL: string | undefined;
  questions: Question[];
  uid: string | undefined;
}

const initialState: AuthState = {
  check: false,
  displayName: '',
  email: '',
  errorMessage: '',
  isLoggedIn: false,
  photoURL: '',
  questions: [],
  uid: '',
};

export const authReducer = reducerWithInitialState(initialState)
  .case(authActions.loginSuccess, (state, { displayName, email, photoURL, uid }) => {
    const isLoggedIn = true;
    const check = true;
    return { ...state, displayName, email, photoURL, uid, isLoggedIn, check };
  })
  .case(authActions.loginFailure, (state) => {
    const check = true;
    return { ...state, errorMessage: 'ログインに失敗しました', check };
  })
  .case(authActions.logoutSuccess, (state) => {
    const isLoggedIn = false;
    const displayName = '';
    const email = '';
    const photoURL = '';
    const uid = '';
    return { ...state, displayName, email, photoURL, uid, isLoggedIn };
  })
  .case(authActions.logoutFailure, (state) => {
    return { ...state, errorMessage: 'ログアウトに失敗しました' };
  })
  .case(authActions.getAdminQuestionsSuccess, (state, questions) => {
    const errorMessage = undefined;
    return { ...state, errorMessage, questions };
  })
  .case(authActions.getAdminQuestionsFailure, (state) => {
    return { ...state, errorMessage: '質問箱の取得に失敗しました' };
  });
