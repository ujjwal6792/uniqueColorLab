import api from "../../../services/api";
import * as TodoTypes from "./types";

export const fetchAllTodos = (title, callback) => async (dispatch) => {

  dispatch({
    type: TodoTypes.SET_LOADING,
    payload: true,
  });
  const localTodos= JSON.parse(localStorage.getItem("Todos"))

    if(localStorage.getItem("Todos")!==null){
     const data = await localTodos
     dispatch({
       type: TodoTypes.SET_TODOS,
       payload: data,
     });
     dispatch({
       type: TodoTypes.SET_LOADING,
       payload: false,
     });
     callback();
    }else{
    const {data} =  await api.get("/todos?_limit=10")
    dispatch({
      type: TodoTypes.SET_TODOS,
      payload: data,
    });
    dispatch({
      type: TodoTypes.SET_LOADING,
      payload: false,
    });
    callback();
    }

};

export const modalView = (modal,id,title) => (dispatch) => {
  dispatch({
    type: TodoTypes.SET_MODAL,
    payload: [modal,id, title]
  })
}

export const deleteTodo = (id)=> async (dispatch) => {
  const del = await api.delete(`/posts/${id}`);
  dispatch({
    type: TodoTypes.SET_DELETETODO,
    payload: id ,
  })

 
}

export const changedTodos = (todos) => async (dispatch) => {
  dispatch({
    type: TodoTypes.SET_TODOS,
    payload: todos
  })
}

export const editTodo = (todos) => async (dispatch) => {
  dispatch({
    type: TodoTypes.SET_TODOS,
    payload: todos
  })
}