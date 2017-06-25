import * as types from './actionTypes';
import todosApi from '../api/mockTodosApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';

export function loadTodosSuccess(todos) {
  return { type: types.LOAD_TODOS_SUCCESS, todos};
}


export function loadTodos() {
  return function(dispatch) {
    dispatch(beginAjaxCall());
    return todosApi.getAllTodos().then(todos => {
      dispatch(loadTodosSuccess(todos));
    }).catch(error => {
      throw(error);
    });
  };
}