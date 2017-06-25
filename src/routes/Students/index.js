export default () => ({
  path : 'students',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const about = require('./components/StudentsView').default
      cb(null, about)
    }, 'students')
  }
})
