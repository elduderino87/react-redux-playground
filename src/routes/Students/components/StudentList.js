import React from 'react'
import PropTypes from 'prop-types'
import StudentListItem from './StudentListItem'

const StudentList = ({ students = [] }) => {
  return (
    <ul>
      {students.map(student =>
        <StudentListItem key={student.id} student={student} />
      )}
    </ul>
  )
}

StudentList.propTypes = {
  students: PropTypes.array.isRequired
}
export default StudentList
