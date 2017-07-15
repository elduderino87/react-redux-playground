import React from 'react'
import TextInput from '../../../components/common/TextInput'
// import SelectInput from '../../../components/common/SelectInput'

const TodoForm = ({ todo, onSave, onChange, saving, errors }) => {
  return (
    <form>
      <h1>Manage Todo</h1>
      <TextInput
        name='title'
        label='Title'
        value={todo.title}
        onChange={onChange}
        error={errors.title} />

      <input
        type='submit'
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className='btn primary'
        onClick={onSave} />
    </form>
  )
}

TodoForm.propTypes = {
  todo: React.PropTypes.object.isRequired,
  onSave: React.PropTypes.func.isRequired,
  onChange: React.PropTypes.func.isRequired,
  saving: React.PropTypes.bool,
  errors: React.PropTypes.object
}

export default TodoForm
