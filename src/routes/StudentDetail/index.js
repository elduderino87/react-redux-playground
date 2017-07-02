export default (store) => ({
  path : 'student/:id',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const student = require('./components/StudentDetailView').default
      cb(null, student)
    }, 'student')
  }
})
