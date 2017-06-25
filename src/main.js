import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import './styles/main.scss'
import { loadTodos } from './actions/todoActions'
import { loadNotifications } from './actions/notificationActions'

const store = configureStore()
const App = require('./layouts/components/App').default
const routes = require('./routes/index').default(store)
store.dispatch(loadTodos())
store.dispatch(loadNotifications())

render(
  <App store={store} routes={routes} />,
  document.getElementById('root')
)
