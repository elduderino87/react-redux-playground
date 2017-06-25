export default () => ({
  path : 'about',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const about = require('./components/AboutView').default
      cb(null, about)
    }, 'about')
  }
})
