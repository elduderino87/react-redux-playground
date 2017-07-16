import { loadStudentById } from '../../actions/studentActions'

export default (store) => ({
  path : 'student/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const studentId = nextState.params.id
      store.dispatch(loadStudentById(studentId))
      const student = require('./components/StudentDetailView').default
      cb(null, student)
    }, 'student')
  }
})
