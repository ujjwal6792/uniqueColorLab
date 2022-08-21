import * as Auth from "./types";

const initialAuth={
  uid: JSON.parse(localStorage.getItem('auth'))?.uid || {
    uid: null,
  },
  user: JSON.parse(localStorage.getItem('auth'))?.user || {
    user: null,
  },
  isLoggedIn: JSON.parse(localStorage.getItem('auth'))?.isLoggedIn || false,
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
        todos: [...payload],
      };
    case Auth.SET_LOGOUT:
      return {
        ...state,
        todoLoading: payload,
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
    default:
      return state;
  }
};

export default AuthState;
