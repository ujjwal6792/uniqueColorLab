import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
import thunk from "redux-thunk";
import rootReducer from "./Reducers";

//middleware array
const middleware = [thunk];

const store =
  process.env.NODE_ENV === "development"
    ? createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(...middleware))
      )
    : createStore(rootReducer, applyMiddleware(...middleware));

export default store;
