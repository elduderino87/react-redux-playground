import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './HomeView.scss'
import Todo from './TodoView'
import Notifications from './NotificationsView'
import { bindActionCreators } from 'redux'
import * as notificationActions from '../../../actions/notificationActions'

class HomeView extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.addNotification = this.addNotification.bind(this)
  }

  addNotification (event) {
    event.preventDefault()
    this.props.actions.addNotification({ id: 0,
      type: 'selfPlacement',
      title: 'Random Self Placement!',
      content: 'You have been assigned a random Self Placement at Fitzroy medical center',
      isNew: true
    })
  }

  render () {
    return (
      <div className='homepage'>
        <h4>Dashboard</h4>
        <section className='l-flex'>
          <article className='homepage__widget'>
            <Todo todos={this.props.todos} />
          </article>
          <article className='homepage__widget'>
            <Notifications notifications={this.props.notifications} onAdd={this.addNotification} />
          </article>
        </section>
      </div>
    )
  }
}

HomeView.propTypes = {
  actions: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired,
  todos: PropTypes.array.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    notifications: state.notifications,
    todos: state.todos
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(notificationActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
