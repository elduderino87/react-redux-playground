import { combineReducers } from 'redux'
import todos from './todoReducer'
import notifications from './notificationReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'

const rootReducer = combineReducers({
  todos,
  notifications,
  ajaxCallsInProgress
})

export default rootReducer
