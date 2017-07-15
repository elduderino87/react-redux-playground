import React from 'react'
import TextInput from '../../../components/common/TextInput'
import SelectInput from '../../../components/common/SelectInput'
import './TodoForm.scss'

const TodoForm = ({ todo, todoTypes, onSave, onCancel, onChange, saving, errors }) => {
  return (
    <form className='m-todo-form'>
      <h1>Manage Todo {todoTypes[0].id}</h1>
      <TextInput
        name='title'
        label='Title'
        value={todo.title}
        onChange={onChange}
        error={errors.title} />

      <SelectInput
        name='typeId'
        label='Author'
        value={todo.typeId}
        defaultOption='Select Type'
        options={todoTypes}
        onChange={onChange} error={errors.typeId} />

      <div className='m-todo-form-actions'>
        <button
          className='btn warning'
          onClick={onCancel}>Cancel</button>

        <input
          type='submit'
          disabled={saving}
          value={saving ? 'Saving...' : 'Save'}
          className='btn primary'
          onClick={onSave} />
      </div>
    </form>
  )
}

TodoForm.propTypes = {
  todo: React.PropTypes.object.isRequired,
  todoTypes: React.PropTypes.array.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onCancel: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
}

export default TodoForm
