import * as actions from './actionTypes'

export function openModal () {
  return {
    type: actions.SHOW_ADD_TODO_MODAL
  }
}

export function hideModal () {
  return {
    type: actions.HIDE_ADD_TODO_MODAL
  }
}
