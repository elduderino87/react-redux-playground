import * as types from './actionTypes'
import studentsApi from '../api/mockStudentsApi'
import { beginAjaxCall } from './ajaxStatusActions'

export function loadStudentsSuccess (students) {
  return { type: types.LOAD_STUDENTS_SUCCESS, students }
}

export function loadStudentByIdSuccess (studentDetail) {
  return { type: types.LOAD_STUDENT_BY_ID_SUCCESS, studentDetail }
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

export function loadStudentById (id) {
  return function (dispatch) {
    dispatch(beginAjaxCall())
    return studentsApi.getStudentById(id).then(student => {
      dispatch(loadStudentByIdSuccess(student))
    }).catch(error => {
      throw (error)
    })
  }
}
