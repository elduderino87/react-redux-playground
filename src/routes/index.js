// We only need to import the modules necessary for initial render
import CoreLayout from '../layouts/PageLayout/PageLayout'
import Home from './Home'
import AboutRoute from './About'
import StudentListRoute from './StudentList'
import StudentDetailRoute from './StudentDetail'

/*  Note: Instead of using JSX, we recommend using react-router
    PlainRoute objects to build route definitions.   */

export const createRoutes = (store) => ({
  path: '/',
  component: CoreLayout,
  indexRoute: Home,
  childRoutes: [
    AboutRoute(),
    StudentListRoute(store),
    StudentDetailRoute(store)
  ]
})

export default createRoutes
