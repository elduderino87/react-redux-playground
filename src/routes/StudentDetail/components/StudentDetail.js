import React from 'react'

const StudentDetail = ({ student }) => {
  return (
    <div>
      <h1>Student Details</h1>
      <label>Name: </label> {student.firstName }
    </div>
  )
}

StudentDetail.propTypes = {
  student: React.PropTypes.object.isRequired
}

export default StudentDetail
