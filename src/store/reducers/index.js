import { combineReducers } from "redux";

import authReducer from "./authReducer";
import thingReducer from "./thingReducer";
const rootReducer = combineReducers({
  authReducer,
  thingReducer,
});

export default rootReducer;
