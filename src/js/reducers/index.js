import { combineReducers } from "redux";

import uiReducer from "./uiReducer";
import filterReducer from "./filterReducer";
import copyReducer from "./copyReducer";

export default combineReducers({
  uiReducer,
  filterReducer,
  copyReducer
})
