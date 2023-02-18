import AsyncStorage from '@react-native-community/async-storage';
import {persistReducer} from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'RichTextEditor',
      storage: AsyncStorage,
      whitelist: ['editorReducer'],
    },
    reducers,
  );

  return persistedReducer;
};
