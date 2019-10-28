const tableReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_NEW_DATA":
      return state.concat([action.data]);
    default:
      return state;
  }
};

export default tableReducer;
