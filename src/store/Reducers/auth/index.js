import * as Auth from "./types";

const initialAuth={
  uid: (localStorage.getItem('uid')) ||null,
  user: JSON.parse(localStorage.getItem('user')) || {
    user: null,
  },
  isLoggedIn:JSON.parse(localStorage.getItem('isLoggedIn')) || false,
  isRegistered: false
}
const initial_auth_state = {
  ...initialAuth

};

const AuthState = (state = initial_auth_state, { type, payload }) => {
  switch (type) {
    case Auth.SET_LOGIN:
      return {
        ...state,
        uid: payload,
      };
    case Auth.SET_LOGIN_STATE:
      return {
        ...state,
        isLoggedIn: payload,
      };
      case Auth.SET_LOGOUT:
        return {
          ...state,
          isLoggedIn: payload,
          uid:null,
          user:null,
        };
    case Auth.SET_REGISTER:
      return {
        ...state,
        isRegistered:payload,
      };
      case Auth.SET_REGISTER_RESET:
        return {
          ...state,
          isRegistered:payload,
        };
      case Auth.SET_USER:
      return {
        ...state,
        user: payload
      }
    default:
      return state;
  }
};

export default AuthState;
