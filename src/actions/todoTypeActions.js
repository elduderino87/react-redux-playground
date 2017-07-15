import TodoTypesApi from '../api/mockTodoTypesApi'
import * as types from './actionTypes'
import { beginAjaxCall } from './ajaxStatusActions'

export function loadTodoTypesSuccess (todoTypes) {
  return { type: types.LOAD_TODOTYPES_SUCCESS, todoTypes }
}

export function loadTodoTypes () {
  return dispatch => {
    dispatch(beginAjaxCall())
    return TodoTypesApi.getAllTodoTypes().then(types => {
      dispatch(loadTodoTypesSuccess(types))
    }).catch(error => {
      throw (error)
    })
  }
}
