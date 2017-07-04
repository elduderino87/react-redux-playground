import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function editTodoModalReducer (state = initialState.editTodoModal, action) {
  switch (action.type) {
    case types.SHOW_ADD_TODO_MODAL:
      return Object.assign({}, state, {
        isShowing: true,
        todoItem: action.todoItem
      })

    case types.HIDE_ADD_TODO_MODAL:
      return Object.assign({}, state, {
        isShowing: false
      })

    default:
      return state
  }
}
