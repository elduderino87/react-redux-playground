import React from 'react'
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router'
import './NavigationMenu.scss'

export const NavigationMenu = ({ newItemsCount }) => {
  return (
    <nav className='l-nav'>
      <ul className='nav-list'>
        <li className='nav-list__item box align-center'>
          <IndexLink to='/' activeClassName='nav-list__item--active'>
          Home (<i>{newItemsCount} New</i>)</IndexLink>
        </li>
        <li className='nav-list__item box align-center'>
          <Link to='/about' activeClassName='nav-list__item--active'>About</Link>
        </li>
        <li className='nav-list__item box align-center'>
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
