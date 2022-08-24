import { combineReducers } from "redux";
import postTheData from "./PostDataReducer";

const rootReducer = combineReducers({
  postTheData,
});

export default rootReducer;
