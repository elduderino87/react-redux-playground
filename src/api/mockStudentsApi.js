import delay from './delay'
import * as _ from 'lodash'

const students = [{
  id: 1,
  firstName: 'Mohammad',
  lastName: 'Sepahvand'
},
{
  id: 2,
  firstName: 'Lionel',
  lastName: 'Messi'
},
{
  id: 3,
  firstName: 'Michael',
  lastName: 'Schumacher'
}
]
class StudentsApi {
  static getAllStudents () {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(Object.assign([], students))
      }, delay)
    })
  }

  static getStudentById (id) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const student = _.find(students, (std) => std.id === +id)
        resolve(Object.assign({}, student))
      }, delay)
    })
  }
}
export default StudentsApi
