const intialstate = {
  navSelectedKey: "6173c6b031c271202cfdcd78",
};
const navBarReducer = (state = intialstate, action) => {
  switch (action.type) {
    case "SET_KEY": {
      return {
        ...state,
        navSelectedKey: action.payload.key,
      };
    }

    default:
      return state;
  }
};
export default navBarReducer;
