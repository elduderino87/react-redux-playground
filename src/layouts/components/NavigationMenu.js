import React from 'react'
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router'

export const NavigationMenu = ({ loading, newItemsCount }) => {
  return (
    <nav>
      <IndexLink to='/' activeClassName='page-layout__nav-item--active'>Home (<i>{newItemsCount}</i>) New</IndexLink>
      {' | '}
      <Link to='/about' activeClassName='page-layout__nav-item--active'>Aboutts</Link>
      {loading && <span>Loading...</span>}
    </nav>
  )
}

NavigationMenu.propTypes = {
  loading: PropTypes.bool.isRequired,
  newItemsCount: PropTypes.number.isRequired
}

export default NavigationMenu
