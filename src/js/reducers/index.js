import { combineReducers } from "redux";

import uiReducer from "./uiReducer";
import filterReducer from "./filterReducer";

export default combineReducers({
  uiReducer,
  filterReducer
})
