import React from 'react'
import PropTypes from 'prop-types'
import { NavigationMenu } from '../components/NavigationMenu'
import { connect } from 'react-redux'
import BlockUi from 'react-block-ui'
import './PageLayout.scss'

class PageLayout extends React.Component {
  render () {
    return (
      <BlockUi className='container' blocking={this.props.loading}>
        <h1>React Redux Starter Kit</h1>
        <NavigationMenu loading={this.props.loading} newItemsCount={this.props.newItemsCount} />
        <div className='page-layout__viewport'>
          {this.props.children}
        </div>
      </BlockUi>
    )
  }
}

PageLayout.propTypes = {
  children: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  newItemsCount: PropTypes.number.isRequired
}

function mapStateToProps (state, ownProps) {
  return {
    loading: state.ajaxCallsInProgress > 0,
    newItemsCount: state.notifications.filter(x => x.isNew).length +
      state.todos.filter(x => x.isNew).length
  }
}

export default connect(mapStateToProps)(PageLayout)
