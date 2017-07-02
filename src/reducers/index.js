import { combineReducers } from 'redux'
import todoItems from './todoReducer'
import addTodoModal from './addTodoModalReducer'
import notifications from './notificationReducer'
import students from './studentReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'
// This below is important in that the naming of these variables will refelect on how they are
// named on the state object
const rootReducer = combineReducers({
  todoItems,
  addTodoModal,
  notifications,
  students,
  ajaxCallsInProgress
})

export default rootReducer
