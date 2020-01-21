import { applyMiddleware, createStore } from 'redux';
// tslint:disable-next-line: no-implicit-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import reducer from '../reducers';
import sagas from '../sagas';

export default function configurationStore(initialState = {}) {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));
  store.sagaTask = sagaMiddleware.run(sagas);
  return store;
}
