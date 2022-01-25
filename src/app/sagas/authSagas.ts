import { query, where, orderBy } from 'firebase/firestore';
// tslint:disable-next-line: no-implicit-dependencies
import { call, put, take, takeEvery } from '@redux-saga/core/effects';
import firebase from 'firebase/app';

import { eventChannel } from 'redux-saga';
import authActions, { LoginSuccess } from '../actions/authActions';
import { Question } from '../actions/questionActions';
import { db, reduxSagaFirebase } from '../firebase/firebase';

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
      return;
    }
  }
  yield put(authActions.loginFailure());
}

function* logout() {
  try {
    yield call(reduxSagaFirebase.auth.signOut);
    yield put(authActions.logoutSuccess());
  } catch {
    yield put(authActions.logoutFailure());
  }
}

function* syncQuestions() {
  const channel = reduxSagaFirebase.firestore
    .channel(query(db.collection('question'), orderBy('created_at', 'desc')), 'collection');
  while (true) {
    try {
      const snapshot = yield take(channel);
      const questions: Question[] = [];
      snapshot.forEach((doc) => {
        const data = doc.data();
        const date: Date = data.created_at.toDate();
        const createdAt = `${date.getFullYear()}/${('0' + (date.getMonth() + 1)).slice(-2)}/${('0' + date.getDate()).slice(-2)} ${('0' + date.getHours()).slice(-2)}:${('0' + date.getMinutes()).slice(-2)}`;
        questions.push({
          answer: data.answer,
          createdAt,
          id: doc.id,
          public: data.public,
          question: data.question,
        });
      });
      yield put(authActions.getAdminQuestionsSuccess(questions));
    } catch (error) {
      yield put(authActions.getAdminQuestionsFailure());
    }
  }
}

function* authSaga() {
  yield takeEvery(authActions.refLogin, refLogin);
  yield takeEvery(authActions.login, login);
  yield takeEvery(authActions.loginGoogle, loginGoogle);
  yield takeEvery(authActions.logout, logout);
  yield takeEvery(authActions.loginSuccess, syncQuestions);
}

export default authSaga;
