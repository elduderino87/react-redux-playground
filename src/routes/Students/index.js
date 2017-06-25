import { loadStudents } from '../../actions/studentActions'

export default (store) => ({
  path : 'students',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const about = require('./components/StudentsView').default
      store.dispatch(loadStudents())
      cb(null, about)
    }, 'students')
  }
})
