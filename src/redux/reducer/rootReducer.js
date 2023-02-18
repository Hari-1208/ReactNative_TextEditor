import {combineReducers} from 'redux';
import {editorReducer} from './editorReducer';

const reducers = combineReducers({
  editorReducer: editorReducer,
});

export default reducers;
