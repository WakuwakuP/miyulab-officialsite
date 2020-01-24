import '@firebase/firestore';
// tslint:disable-next-line: no-implicit-dependencies
import { put, take, takeEvery } from '@redux-saga/core/effects';

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
        const createdAt = `${date.getFullYear()}/${('0' + date.getDate()).slice(-2)}/${('0' + date.getHours()).slice(-2)} ${('0' + date.getMinutes()).slice(-2)}:${('0' + date.getSeconds()).slice(-2)}`;
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

function* questionSaga() {
  yield takeEvery(Actions.firstView, syncQuestions);
}

export default questionSaga;
