import { combineReducers } from "redux";
import AuthState from "./auth";
import InteractionTypes from "./interactions";

const rootReducer = combineReducers({
  interactions: InteractionTypes,
  auth: AuthState,
});

export default rootReducer;
