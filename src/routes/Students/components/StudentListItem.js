import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'

const StudentListItem = ({ student }) => {
  return (
    <li>
      <Link to={'/student/' + student.id}>{student.lastName}, {student.firstName}</Link>
    </li>
  )
}

StudentListItem.propTypes = {
  student: PropTypes.object.isRequired
}

export default StudentListItem
