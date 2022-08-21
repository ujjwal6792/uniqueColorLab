import { combineReducers } from "redux";
import AuthState from "./auth";
import TodoReducer from "./Todos";

const rootReducer = combineReducers({
  todos: TodoReducer,
  auth: AuthState,
});

export default rootReducer;
