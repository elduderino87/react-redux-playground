import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as studentActions from '../../../actions/studentActions'
import StudentList from './StudentList'

class StudentsView extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.redirectToAddStudentPage = this.redirectToAddStudentPage.bind(this)
  }

  redirectToAddStudentPage () {
    alert(`todo: redirect to add student form`)
  }

  componentDidMount () {
    this.props.actions.loadStudents()
  }

  render () {
    const { students } = this.props

    return (
      <div>
        <h1>Students</h1>
        <StudentList students={students} />
        <hr />
        <input type='submit'
          value='Add Student'
          className='btn primary'
          onClick={this.redirectToAddCoursePage} />
      </div>
    )
  }
}

StudentsView.propTypes = {
  students: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    students: state.students
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(studentActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentsView)
