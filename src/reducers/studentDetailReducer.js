import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function StudentDetailReducer (state = initialState.studentDetail, action) {
  switch (action.type) {
    case types.LOAD_STUDENT_BY_ID_SUCCESS:
      return action.studentDetail

    default:
      return state
  }
}
