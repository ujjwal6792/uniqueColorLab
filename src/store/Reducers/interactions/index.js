import * as InteractionTypes from "./types";

const initial_state = {
  loading: false,
  modal: false,
  style: "",
  data: {},
};

const InteractionReducer = (state = initial_state, { type, payload }) => {
  switch (type) {
    case InteractionTypes.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case InteractionTypes.SET_MODAL:
      return {
        ...state,
        modal: payload
      };
    default:
      return state;
  }
};

export default InteractionReducer;
