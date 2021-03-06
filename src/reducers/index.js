import { combineReducers } from 'redux'
import todoItems from './todoReducer'
import editTodoModal from './editTodoModalReducer'
import notifications from './notificationReducer'
import todoTypes from './todoTypeReducer'
import students from './studentReducer'
import studentDetail from './studentDetailReducer'
import ajaxCallsInProgress from './ajaxStatusReducer'
// This below is important in that the naming of these variables will refelect on how they are
// named on the state object
const rootReducer = combineReducers({
  todoItems,
  todoTypes,
  editTodoModal,
  notifications,
  students,
  ajaxCallsInProgress,
  studentDetail
})

export default rootReducer
