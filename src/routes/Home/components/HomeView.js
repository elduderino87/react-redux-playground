import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import './HomeView.scss'
import Todo from './TodoView'
import EditTodoView from './EditTodoView'
import Notifications from './NotificationsView'
import { addNotification } from '../../../actions/notificationActions'
import { openModal } from '../../../actions/todoModalActions'

class HomeView extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.addNotification = this.onAddNotification.bind(this)
    this.editTodo = this.onEditTodo.bind(this)
  }

  onAddNotification ($event) {
    $event.preventDefault()
    this.props.actions.addNotification({ id: 0,
      type: 'selfPlacement',
      title: 'Random Self Placement!',
      content: 'You have been assigned a random Self Placement at Fitzroy medical center',
      isNew: true
    })
  }

  onEditTodo (todo) {
    this.props.actions.editTodo(todo)
  }

  render () {
    return (
      <div className='homepage'>
        <h4>Dashboard</h4>
        <section className='box'>
          <article className='homepage__widget'>
            <Todo todos={this.props.todos} editTodo={this.editTodo} />
          </article>
          <article className='homepage__widget'>
            <Notifications notifications={this.props.notifications} addNotification={this.addNotification} />
          </article>
        </section>
        <EditTodoView isOpen={this.props.showEditTodoModal}
           />
      </div>
    )
  }
}

HomeView.propTypes = {
  actions: PropTypes.object.isRequired,
  notifications: PropTypes.array.isRequired,
  todos: PropTypes.array.isRequired,
  showEditTodoModal: PropTypes.bool.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    notifications: state.notifications,
    todos: state.todoItems,
    showEditTodoModal: state.editTodoModal.isShowing
  }
}
function mapDispatchToProps (dispatch) {
  return {
    actions:{
      addNotification: (notification) => dispatch(addNotification(notification)),
      editTodo: (todo) => dispatch(openModal(todo))      
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeView)
