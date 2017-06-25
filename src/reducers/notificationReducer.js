import * as types from '../actions/actionTypes'
import initialState from './initialState'

export default function notificationReducer (state = initialState.notifications, action) {
  switch (action.type) {
    case types.LOAD_NOTIFICATIONS_SUCCESS:
      return action.notifications

    case types.ADD_NOTIFICATION_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.notification)
      ]

    default:
      return state
  }
}
