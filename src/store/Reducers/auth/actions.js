import * as Auth from "./types";
import firebase, { auth, db } from "../../../../firebase";

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
    const userDetails = 
    firebase.firestore()
    .collection(`users`)
    .doc(auth.user.uid)
    .onSnapshot((doc) => {
    localStorage.setItem("user", JSON.stringify({ ...doc.data(), id: doc.id }))
    dispatch({
      type:Auth.SET_USER,
      payload:  { ...doc.data(), id: doc.id },
    })
  })
  .catch((error) => alert(error.message))

})
}
