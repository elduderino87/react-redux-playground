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
  students: PropTypes.array.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(StudentDetailView)
