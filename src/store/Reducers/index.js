import { combineReducers } from "redux";
import TodoReducer from "./Todos";

const rootReducer = combineReducers({
  todos: TodoReducer,
});

export default rootReducer;
