import * as actions from './actionTypes'
import todosApi from '../api/mockTodosApi'
import { beginAjaxCall } from './ajaxStatusActions'

export function loadTodosSuccess (todoItems) {
  return { type: actions.LOAD_TODOS_SUCCESS, todoItems }
}

export function loadTodos () {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return todosApi.getAllTodos().then(todos => {
      dispatch(loadTodosSuccess(todos))
    }).catch(error => {
      throw (error)
    })
  }
}
