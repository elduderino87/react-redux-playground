import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

export const EditTodoView = ({ isOpen, closeModal, todoItem }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel='Example Modal'>
    <h2>{ todoItem.title }</h2>
    <p>ID: { todoItem.id }</p>
    <button onClick={closeModal}>close</button>
  </Modal>
)

EditTodoView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  todoItem: PropTypes.object.isRequired
}

export default EditTodoView
