import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function addTodoModalReducer (state = initialState.addTodoModal, action) {
  switch (action.type) {
    case types.SHOW_ADD_TODO_MODAL:
      return Object.assign({}, state, {
        isShowing: true,
        message: action.message
      })

    case types.HIDE_ADD_TODO_MODAL:
      return Object.assign({}, state, {
        isShowing: false
      })

    default:
      return state
  }
}
