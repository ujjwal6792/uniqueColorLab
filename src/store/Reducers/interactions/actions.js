import * as InteractionTypes from "./types";

export const Loading = (state) => async (dispatch) => {
  dispatch({
    type: InteractionTypes.SET_LOADING,
    payload: state
  })
}

  export const Modal = (state) => async (dispatch) => {
  dispatch({
    type: InteractionTypes.SET_MODAL,
    payload: state
  })
}