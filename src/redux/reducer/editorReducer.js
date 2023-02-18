const INITIAL_STATE = {
  contentData: '<strong>WellCome to Rich Text Editor</strong>',
};

export const editorReducer = (state = INITIAL_STATE, action) => {
  const {type} = action;
  switch (type) {
    case 'ON_DATA_CHANGE':
      return {
        ...state,
        contentData: action.payload,
      };

    default:
      return state;
  }
};
