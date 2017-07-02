import React from 'react'
import PropTypes from 'prop-types'
import './TodoView.scss'

export const TodoView = ({ todos, addTodo }) => (
  <div className='todo'>
    <h4>Todo View!</h4>
    <ul>
      {todos.map(todo =>
        <li key={todo.id}>
          <div>
            {todo.title} {todo.isNew ? <i>New</i> : ''}
          </div>
        </li>
      )}
    </ul>
    <input
      type='submit'
      value={'Add Todo'}
      className='btn primary add-todo'
      onClick={addTodo} />
  </div>
)

TodoView.propTypes = {
  todos: PropTypes.array.isRequired,
  addTodo: PropTypes.func.isRequired
}

export default TodoView
