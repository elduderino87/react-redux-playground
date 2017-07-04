import * as actions from './actionTypes'

export function openModal (todoItem) {
  return {
    type: actions.SHOW_ADD_TODO_MODAL,
    todoItem
  }
}

export function hideModal () {
  return {
    type: actions.HIDE_ADD_TODO_MODAL
  }
}
