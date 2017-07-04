import React from 'react'
import PropTypes from 'prop-types'
import './TodoView.scss'

class TodoView extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.setSelectedTodo = this.setSelectedTodo.bind(this)
  }

  setSelectedTodo (todo) {
    this.props.editTodo(todo)
  }
  render () {
    return (
      <div className='todo'>
        <h4>Todo View!</h4>
        <ul className='todo__list'>
          {this.props.todos.map(todo =>
            <li key={todo.id} className='todo__list-item'>
              <span className='todo__add-todo'
                onClick={() => this.setSelectedTodo(todo)}>
                {todo.title} {todo.isNew ? <i>New</i> : ''}
              </span>
            </li>
          )}
        </ul>
      </div>
    )
  }
}

TodoView.propTypes = {
  todos: PropTypes.array.isRequired,
  editTodo: PropTypes.func.isRequired
}

export default TodoView
