import { combineReducers } from "redux";
import userStateReducer from "./PostDataReducer";

const rootReducer = combineReducers({
  userState: userStateReducer,
});

export default rootReducer;
