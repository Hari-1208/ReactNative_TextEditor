import {store} from '../store';

export function getEditorContentData() {
  try {
    return store.getState().editorReducer;
  } catch (error) {}
}
