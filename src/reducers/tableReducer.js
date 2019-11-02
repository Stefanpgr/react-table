const INITIAL_STATE = {
  items: []
};

const tableReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CREATE_NEW_DATA_ASYNC":
      return { ...state, items: action.data };
    default:
      return state;
  }
};

export default tableReducer;
