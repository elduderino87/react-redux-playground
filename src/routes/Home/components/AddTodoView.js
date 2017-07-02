import React from 'react'
import PropTypes from 'prop-types'
import Modal from 'react-modal'

export const AddTodoView = ({ isOpen, closeModal }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={closeModal}
    contentLabel='Example Modal'>
    <h2>Hello</h2>
    <button onClick={closeModal}>close</button>
  </Modal>
)

AddTodoView.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired
}

export default AddTodoView
