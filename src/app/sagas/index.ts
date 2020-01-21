import '@firebase/firestore';
// tslint:disable-next-line: no-implicit-dependencies
import { all, call } from '@redux-saga/core/effects';

import authSagas from './authSagas';

export default function* rootSaga() {
  yield all([
    call(authSagas),
  ]);
}
