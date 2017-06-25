import * as types from './actionTypes'
import studentsApi from '../api/mockStudentsApi'
import { beginAjaxCall } from './ajaxStatusActions'

export function loadStudentsSuccess (students) {
  return { type: types.LOAD_STUDENTS_SUCCESS, students }
}

export function loadStudents () {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return studentsApi.getAllStudents().then(students => {
      dispatch(loadStudentsSuccess(students))
    }).catch(error => {
      throw (error)
    })
  }
}
