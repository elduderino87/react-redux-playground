import React from 'react'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { browserHistory } from 'react-router'
import * as studentActions from '../../../actions/studentActions'

class StudentDetailView extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.redirectToStudentListPage = this.redirectToStudentListPage.bind(this)
  }

  redirectToStudentListPage () {
    browserHistory.push('/students')
  }

  render () {
    return (
      <div>
        <h1>Student Details</h1>
        <label>Name: </label> { this.props.student.firstName }
        <hr />
        <input type='button'
          value='Back'
          className='btn default'
          onClick={this.redirectToStudentListPage} />
      </div>
    )
  }
}

StudentDetailView.propTypes = {
  student: PropTypes.object.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    student: state.studentDetail || {}
  }
}

function mapDispatchToProps (dispatch) {
  return {
    actions: bindActionCreators(studentActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetailView)
