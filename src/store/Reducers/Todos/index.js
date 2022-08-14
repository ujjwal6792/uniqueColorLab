import * as TodoTypes from "./types";

const initial_todo_state = {
  todos: null,
  todoLoading: false,
  modal: false,
  id: "",
  editTodo: "",
  deletedtodo: "",
  title: "",
};

const TodoReducer = (state = initial_todo_state, { type, payload }) => {
  switch (type) {
    case TodoTypes.SET_TODOS:
      return {
        ...state,
        todos: [...payload],
      };
    case TodoTypes.SET_LOADING:
      return {
        ...state,
        todoLoading: payload,
      };
    case TodoTypes.SET_MODAL:
      return {
        ...state,
        modal: payload[0],
        id: payload[1],
        title: payload[2]
      };
    case TodoTypes.SET_EDITTEDTODO:
      return {
        ...state,
        editTodo: payload,
      };
    case TodoTypes.SET_DELETETODO:
      return {
        ...state,
        deletedtodo: payload,
      };
    default:
      return state;
  }
};

export default TodoReducer;
