import { combineReducers } from 'redux'
import todos from './todoReducer'
import notifications from './notificationReducer'
import students from './studentReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'

const rootReducer = combineReducers({
  todos,
  notifications,
  students,
  ajaxCallsInProgress
})

export default rootReducer
