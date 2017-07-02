import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './HomeView.scss'
import Todo from './TodoView'
import AddTodoView from './AddTodoView'
import Notifications from './NotificationsView'
import { addNotification } from '../../../actions/notificationActions'
import { openModal, hideModal } from '../../../actions/todoModalActions'

class HomeView extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.addNotification = this.onAddNotification.bind(this)
  }

  onAddNotification (event) {
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
        <section className='box'>
          <article className='homepage__widget'>
            <Todo todos={this.props.todos} addTodo={this.props.actions.addTodo} />
          </article>
          <article className='homepage__widget'>
            <Notifications notifications={this.props.notifications} addNotification={this.addNotification} />
          </article>
        </section>
        <AddTodoView isOpen={this.props.showAddTodoModal} closeModal={this.props.actions.closeAddTodoModal} />
      </div>
    )
  }
}

HomeView.propTypes = {
  actions: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired,
  todos: PropTypes.array.isRequired,
  showAddTodoModal: PropTypes.bool.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    notifications: state.notifications,
    todos: state.todoItems,
    showAddTodoModal: state.addTodoModal.isShowing,
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions:{
      addNotification: (notification) => dispatch(addNotification(notification)),
      addTodo: () => dispatch(openModal()),
      closeAddTodoModal: () => dispatch(hideModal())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
