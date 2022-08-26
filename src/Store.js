import { applyMiddleware, configureStore } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./Components/ReduxStuff/RootReducerMaker";

const store = configureStore(rootReducer, applyMiddleware(thunk));

export default store;
