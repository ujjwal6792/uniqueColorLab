import api from "../../../services/api";
import * as InteractionTypes from "./types";

export const modal = (state) => async (dispatch) => {
  dispatch({
    type: InteractionTypes.SET_LOADING,
    payload: state
  })
}

export const editTodo = (state) => async (dispatch) => {
  dispatch({
    type: InteractionTypes.SET_MODAL,
    payload: state
  })
}