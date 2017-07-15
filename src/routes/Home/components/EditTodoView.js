import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import TodoForm from './TodoForm'
import toastr from 'toastr'
import { connect } from 'react-redux'
import { updateTodo } from '../../../actions/todoItemActions'
import './EditTodoView.scss'

export class EditTodoView extends React.Component {
  constructor (props, context) {
    super(props, context)
    
    this.state = {
      todo: Object.assign({}, props.todo),
      errors: {},
      saving: false,
      isOpen: this.props.isOpen
    }

    this.updateTodoState = this.updateTodoState.bind(this)
    this.cancelEdit = this.cancelEdit.bind(this)
    this.saveTodo = this.saveTodo.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.todo.id !== nextProps.todo.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.originalTodo = Object.assign({}, nextProps.todo)
      this.setState({ todo: Object.assign({}, nextProps.todo) })
    }
  }

  updateTodoState (event) {
    const field = event.target.name
    let todo = this.state.todo
    todo[field] = event.target.value
    return this.setState({ todo: todo })
  }

  todoFormIsValid = () => {
    let formIsValid = true
    let errors = {}

    if (this.state.todo.title.length < 5) {
      errors.title = 'Title must be at least 5 characters.'
      formIsValid = false
    }

    this.setState({ errors: errors })
    return formIsValid
  }

  handleTodoSubmit (saved) {
    this.setState({ saving: false })
    toastr.success(saved ? 'Todo saved' : 'Edit canceled')
    this.props.closeModal()
  }

  cancelEdit (event) {
    event.preventDefault()
    this.setState({ todo: this.originalTodo })
    this.handleTodoSubmit(false)
  }

  saveTodo (event) {
    event.preventDefault()
    if (!this.todoFormIsValid()) {
      return
    }

    this.setState({ saving: true })

    this.props.actions.saveTodo(this.state.todo)
      .then(() => this.handleTodoSubmit(true))
      .catch(error => {
        toastr.error(error)
        this.setState({ saving: false })
      })
  }

  render () {
    return (
      <Modal
        isOpen={this.props.isOpen}
        onRequestClose={this.props.closeModal}
        contentLabel='Add/Edit Todo'>
        <section className='edit-todo-modal'>
          <div className='edit-todo-modal__heading'>
            <h2>{ this.props.todo.title }</h2>
            <button className='btn xs danger edit-todo-modal__close'
              onClick={this.props.closeModal}>close</button>
          </div>
          <article className='edit-todo-modal__body'>
            <p>ID: { this.props.todo.id }</p>
            <TodoForm todo={this.state.todo}
              onSave={this.saveTodo} onChange={this.updateTodoState}
              errors={this.state.errors} onCancel={this.cancelEdit}
              saving={this.state.saving} />
          </article>
        </section>
      </Modal>
    )
  }
}

EditTodoView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  todo: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    todo: state.editTodoModal.todoItem
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions:{
      saveTodo: (todo) => dispatch(updateTodo(todo))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTodoView)
