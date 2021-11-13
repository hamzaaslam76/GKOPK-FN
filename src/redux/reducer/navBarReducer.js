const intialstate = {
  navSelectedKey: "6173c6b031c271202cfdcd78",
  drawersOpen: false,
};
const navBarReducer = (state = intialstate, action) => {
  switch (action.type) {
    case "SET_KEY": {
      return {
        ...state,
        navSelectedKey: action.payload.key,
        drawersOpen: action.payload.open ? action.payload.open : false,
      };
    }

    default:
      return state;
  }
};
export default navBarReducer;
