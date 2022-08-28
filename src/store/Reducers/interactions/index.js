import * as InteractionTypes from "./types";

const initial_todo_state = {
  loading: false,
  modal: false,
};

const InteractionReducer = (state = initial_todo_state, { type, payload }) => {
  switch (type) {
    case InteractionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
      case InteractionTypes.SET_MODAL:
        return {
          ...state,
          modal: payload,
        };
    default:
      return state;
  }
};

export default InteractionReducer;
