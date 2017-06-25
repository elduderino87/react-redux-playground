import React from 'react'
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router'
import './NavigationMenu.scss'

export const NavigationMenu = ({ newItemsCount }) => {
  return (
    <nav>
      <ul className='nav-list'>
        <li className='nav-list__item'>
          <IndexLink to='/' activeClassName='nav-list__item--active'>
          Home (<i>{newItemsCount}</i>) New</IndexLink>
        </li>
        <li className='nav-list__item'>
          <Link to='/about' activeClassName='nav-list__item--active'>About</Link>
        </li>
        <li className='nav-list__item'>
          <Link to='/students' activeClassName='nav-list__item--active'>Students</Link>
        </li>
      </ul>
    </nav>
  )
}

NavigationMenu.propTypes = {
  newItemsCount: PropTypes.number.isRequired
}

export default NavigationMenu
