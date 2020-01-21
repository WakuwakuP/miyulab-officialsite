import '@firebase/firestore';
// tslint:disable-next-line: no-implicit-dependencies
import { call, put, takeEvery } from '@redux-saga/core/effects';

import authActions, { LoginSuccess } from '../actions/authActions';
import { reduxSagaFirebase } from '../firebase/firebase';

function* login(action) {
  const { email, password } = action.payload;
  try {
    const data = yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, email, password);
    const loginSuccess: LoginSuccess = {
      displayName: data.user.displayName,
      email: data.user.email,
      photoURL: data.user.photoURL,
      uid: data.user.uid,
    };
    yield put(authActions.loginSuccess(loginSuccess));
  } catch {
    yield put(authActions.loginFailure());
  }
}

function* authSaga() {
  yield takeEvery(authActions.login, login);
}

export default authSaga;
