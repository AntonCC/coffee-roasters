import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/shared/desktop/logo.svg'

const Navbar: React.FC = () => {
  return (
    <div className='navbar container'>
      <div className="logo">
        <img src={Logo} alt="Brand logo"/>
      </div>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/about'>About</NavLink>
          <NavLink to='/create-plan'>Create Your Plan</NavLink>
        </li>
      </ul>
    </div>
  )
}

export default Navbar;