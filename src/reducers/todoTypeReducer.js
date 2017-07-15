import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function todoReducer (state = initialState.todoTypes, action) {
  switch (action.type) {
    case types.LOAD_TODOTYPES_SUCCESS:
      return action.todoTypes

    default:
      return state
  }
}
