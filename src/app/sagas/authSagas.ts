import '@firebase/firestore';
// tslint:disable-next-line: no-implicit-dependencies
import { call, put, take, takeEvery } from '@redux-saga/core/effects';
import firebase from 'firebase/app';

import { eventChannel } from 'redux-saga';
import authActions, { LoginSuccess } from '../actions/authActions';
import { reduxSagaFirebase } from '../firebase/firebase';

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

function* login(action) {
  const { email, password } = action.payload;
  try {
    const data = yield call(reduxSagaFirebase.auth.signInWithEmailAndPassword, email, password);
    const loginSuccess: LoginSuccess = {
      displayName: data.user.displayName || undefined,
      email: data.user.email,
      photoURL: data.user.photoURL || undefined,
      uid: data.user.uid,
    };
    yield put(authActions.loginSuccess(loginSuccess));
  } catch {
    yield put(authActions.loginFailure());
  }
}

function* loginGoogle() {
  try {
    yield call(reduxSagaFirebase.auth.signInWithPopup, googleAuthProvider);
    yield put(authActions.refLogin());
  } catch (e) {
    yield put(authActions.loginFailure(e));
  }
}

function* refLogin() {
  const channel = yield call(() => {
    return eventChannel((emit) => {
      return firebase.auth().onAuthStateChanged(
        // tslint:disable-next-line: no-shadowed-variable
        (user) => emit({ user }),
        // tslint:disable-next-line: no-shadowed-variable
        (error) => emit({ error }),
      );
    });
  });
  const data = yield take(channel);
  if (data.user) {
    const loginSuccess: LoginSuccess = {
      displayName: data.user.displayName || undefined,
      email: data.user.email || undefined,
      photoURL: data.user.photoURL || undefined,
      uid: data.user.uid || undefined,
    };
    if (data.user && !data.error) {
      yield put(authActions.loginSuccess(loginSuccess));
    }
  }
}

function* logout() {
  try {
    yield call(reduxSagaFirebase.auth.signOut);
    yield put(authActions.logoutSuccess());
  } catch {
    yield put(authActions.logoutFailure());
  }
}

function* authSaga() {
  yield takeEvery(authActions.refLogin, refLogin);
  yield takeEvery(authActions.login, login);
  yield takeEvery(authActions.loginGoogle, loginGoogle);
  yield takeEvery(authActions.logout, logout);
}

export default authSaga;
