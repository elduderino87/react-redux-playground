import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function todoReducer (state = initialState.todoItems, action) {
  switch (action.type) {
    case types.LOAD_TODOS_SUCCESS:
      return action.todoItems

    case types.UPDATE_TODO_SUCCESS:
      return [
        ...state.filter(todo => todo.id !== action.todoItem.id),
        Object.assign({}, action.todoItem)
      ]

    default:
      return state
  }
}
