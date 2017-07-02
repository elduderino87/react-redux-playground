import * as actions from '../actions/actionTypes'
import initialState from './initialState'

export default function notificationReducer (state = initialState.notifications, action) {
  switch (action.type) {
    case actions.LOAD_NOTIFICATIONS_SUCCESS:
      return action.notifications

    case actions.ADD_NOTIFICATION_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.notification)
      ]

    default:
      return state
  }
}
