import delay from './delay'
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
}
export default StudentsApi
