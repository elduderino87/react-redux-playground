import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'
import TodoForm from './TodoForm'
import toastr from 'toastr'
import { connect } from 'react-redux'
import { updateTodo } from '../../../actions/todoItemActions'

export class EditTodoView extends React.Component {
  constructor (props, context) {
    super(props, context)
    debugger
    this.state = {
      todo: Object.assign({}, props.todo),
      errors: {},
      saving: false,
      isOpen: this.props.isOpen
    }

    this.updateTodoState = this.updateTodoState.bind(this)
    this.saveTodo = this.saveTodo.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (this.props.todo.id !== nextProps.todo.id) {
      // Necessary to populate form when existing course is loaded directly.
      this.setState({ todo: Object.assign({}, nextProps.todo) })
    }
  }

  updateTodoState (event) {
    const field = event.target.name
    let todo = this.state.todo
    todo[field] = event.target.value
    return this.setState({ todo: todo })
  }

  backToDashboard () {
    this.setState({ saving: false })
    toastr.success('Todo saved')
  }

  saveTodo (event) {
    event.preventDefault()
    if (!this.todoFormIsValid()) {
      return
    }

    this.setState({ saving: true })

    this.props.actions.saveTodo(this.state.todo)
      .then(() => this.backToDashboard())
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
        <h2>{ this.props.todo.title }</h2>
        <p>ID: { this.props.todo.id }</p>
        <button className='btn danger' onClick={this.props.closeModal}>close</button>
        <TodoForm todo={this.state.todo}
          onSave={this.saveTodo} onChange={this.updateTodoState}
          errors={this.state.errors}
          saving={this.state.saving} />
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

function mapDispatchToProps (dispatch) {
  return {
    actions:{
      saveTodo: (todo) => dispatch(updateTodo(todo)),
    }
  }
}

function mapStateToProps (state, ownProps) {
  return {
    todo: ownProps.todo
  }
}

export default connect(mapDispatchToProps, mapStateToProps)(EditTodoView)
