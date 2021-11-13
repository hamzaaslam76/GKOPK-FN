import { combineReducers } from "redux";
import common from "./commonReducer";
import navBarReducer from "./navBarReducer";
const rootReducer = combineReducers({
  common,
  navBarReducer,
});
export default rootReducer;
