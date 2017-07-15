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

export function updateTodo (todo) {
  return function (dispatch, getState) {
    dispatch(beginAjaxCall())
    return todosApi.saveTodo(todo).then(course => {
      dispatch(updateTodoSuccess(todo))
    }).catch(error => {
      throw (error)
    })
  }
}

export function updateTodoSuccess (todoItem) {
  return { type: actions.UPDATE_TODO_SUCCESS, todoItem }
}
