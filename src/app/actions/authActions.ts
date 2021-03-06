import actionCreatorFactory from 'typescript-fsa';
import { Question } from './questionActions';

const actionCreator = actionCreatorFactory();

export interface Login {
  email: string;
  password: string;
}

export interface LoginSuccess {
  displayName: string | undefined;
  email: string | undefined;
  photoURL: string | undefined;
  uid: string | undefined;
}

const authActions = {
  getAdminQuestions: actionCreator<void>('AUTH_GET_ADMIN_QUESTIONS'),
  getAdminQuestionsFailure: actionCreator<void>('AUTH_GET_ADMIN_QUESTIONS_FAILURE'),
  getAdminQuestionsSuccess: actionCreator<Question[]>('AUTH_GET_ADMIN_QUESTIONS_SUCCESS'),
  login: actionCreator<Login>('AUTH_LOGIN'),
  loginFailure: actionCreator<void>('AUTH_LOGIN_FAILURE'),
  loginGoogle: actionCreator<void>('AUTH_LOGIN_GOOGLE'),
  loginSuccess: actionCreator<any>('AUTH_LOGIN_SUCCESS'),
  logout: actionCreator<void>('AUTH_LOGOUT'),
  logoutFailure: actionCreator<void>('AUTH_LOGOUT_FAULURE'),
  logoutSuccess: actionCreator<void>('AUTH_LOGOUT_SUCCESS'),
  refLogin: actionCreator<void>('AUTH_REF_LOGIN'),
};

export default authActions;
