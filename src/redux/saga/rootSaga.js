import {all} from 'redux-saga/effects';
import editorSaga from './editorSaga';

export default function* rootSaga() {
  return yield all([editorSaga]);
}
