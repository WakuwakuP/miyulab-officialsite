import '@firebase/firestore';
import firebase from 'firebase';
import ReduxSagaFirebase from 'redux-saga-firebase';
import firebaseConfig from './config';

export const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

export const db = firebase.firestore();

export const reduxSagaFirebase = new ReduxSagaFirebase(firebaseApp);
