const intialstate = {
  parentId: "",
  title: "",
};
const common = (state = intialstate, action) => {
  switch (action.type) {
    case "SET_STATE": {
      return {
        ...state,
        parentId: action.payload.id,
        title: action.payload.title,
      };
    }

    default:
      return state;
  }
};
export default common;
