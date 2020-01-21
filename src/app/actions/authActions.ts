import actionCreatorFactory from 'typescript-fsa';

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
  login: actionCreator<Login>('AUTH_LOGIN'),
  loginFailure: actionCreator<void>('AUTH_LOGIN_FAILURE'),
  loginSuccess: actionCreator<LoginSuccess>('AUTH_LOGIN_SUCCESS'),
  logout: actionCreator<void>('AUTH_LOGOUT'),
  logoutFailure: actionCreator<void>('AUTH_LOGOUT_FAULURE'),
  logoutSuccess: actionCreator<void>('AUTH_LOGOUT_SUCCESS'),
  refLogin: actionCreator<string>('AUTH_REF_LOGIN'),
};

export default authActions;
