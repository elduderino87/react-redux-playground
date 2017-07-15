import React from 'react'
import { render } from 'react-dom'
import configureStore from './store/configureStore'
import './styles/main.scss'
import '../node_modules/toastr/build/toastr.min.css'
import { loadTodos } from './actions/todoItemActions'
import { loadTodoTypes } from './actions/todoTypeActions'
import { loadNotifications } from './actions/notificationActions'

const store = configureStore()
const App = require('./layouts/components/App').default
const routes = require('./routes/index').default(store)
store.dispatch(loadTodos())
store.dispatch(loadTodoTypes())
store.dispatch(loadNotifications())

render(
  <App store={store} routes={routes} />,
  document.getElementById('root')
)
