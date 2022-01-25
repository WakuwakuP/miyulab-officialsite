import '@firebase/firestore';
// tslint:disable-next-line: no-implicit-dependencies
import { call, put, take, takeEvery } from '@redux-saga/core/effects';
import firebase from 'firebase/app';

import Actions from '../actions';
import { Question } from '../actions/questionActions';
import { db, reduxSagaFirebase } from '../firebase/firebase';

function* syncQuestions() {
  const channel = reduxSagaFirebase.firestore
    .channel(db.collection('question').where('public', '==', true).orderBy('created_at', 'desc'), 'collection');
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
      yield put(Actions.getQuestionListSuccess(questions));
    } catch (error) {
      yield put(Actions.getQuestionListFailure());
    }
  }
}

function* createQuestion(action) {
  const q = action.payload;
  const createdAt = firebase.firestore.FieldValue.serverTimestamp();
  const question = { question: q, created_at: createdAt, public: false, answer: '' };
  try {
    yield call(reduxSagaFirebase.firestore.addDocument, 'question', question);
    yield put(Actions.createQuestionSuccess());
  } catch (error) {
    yield put(Actions.createQuestionFailure());
  }
}

function* updateQuestion(action) {
  const q = action.payload;
  const question = { public: q.public, answer: q.answer };
  try {
    yield call(reduxSagaFirebase.firestore.updateDocument, `question/${q.id}`, question);
    yield put(Actions.createQuestionSuccess());
  } catch (error) {
    yield put(Actions.createQuestionFailure());
  }
}

function* questionSaga() {
  yield takeEvery(Actions.firstView, syncQuestions);
  yield takeEvery(Actions.createQuestion, createQuestion);
  yield takeEvery(Actions.updateQuestion, updateQuestion);
}

export default questionSaga;
