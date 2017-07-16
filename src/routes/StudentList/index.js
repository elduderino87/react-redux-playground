export default () => ({
  path : 'students',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const students = require('./components/StudentsView').default
      cb(null, students)
    }, 'students')
  }
})
