import * as Auth from "./types";
import { auth, db } from "../../../../firebase";

export const RegisterState = (values) => (dispatch) => {
  if (values != null) {
    auth
      .createUserWithEmailAndPassword(values.email, values.password)
      .then((auth) => {
        dispatch({
          type: Auth.SET_REGISTER,
          payload: true,
        });
        db.collection("users").doc(auth.user.uid).set({
          uid: auth.user.uid,
          firstname: values.firstName,
          surname: values.lastName,
          email: values.email,
        });
      });
  }
};

export const RegisterReset = (value) => (dispatch) => {
  dispatch({
    type: Auth.SET_REGISTER_RESET,
    payload: value,
  });
};

export const LoginState = (values) => (dispatch) => {

  const user ={}
  auth
  .signInWithEmailAndPassword(values.email, values.password)
  .then((auth) => {
    dispatch({
      type: Auth.SET_LOGIN,
      payload: auth.user.uid,
    })
    dispatch({
      type:Auth.SET_LOGIN_STATE,
      payload: true
    })
    localStorage.setItem("uid", auth.user.uid)
    localStorage.setItem("isLoggedIn", true)
  })
  .catch((error) => alert(error.message));

};
