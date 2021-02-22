import React, { useState } from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/shared/desktop/logo.svg'
import LogoMobile from '../../assets/shared/mobile/logo-mobile.svg'
import { ReactComponent as Hamburger } from '../../assets/shared/mobile/icon-hamburger.svg'
import { ReactComponent as Close } from '../../assets/shared/mobile/icon-close.svg'

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false)

  const handleClick = () => {
    setMobileOpen(!mobileOpen)
  }

  return (
    <div className='navbar-outer'> 
      <div className='navbar container'>
          <div className="logo">
            <NavLink to='/'>
              <picture>
                <source media="(max-width: 530px)" srcSet={LogoMobile} />
                <img src={Logo} alt="Logo"/>
              </picture>
            </NavLink>
          </div>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
              <NavLink to='/about'>About</NavLink>
              <NavLink to='/create-plan'>Create Your Plan</NavLink>
            </li>
          </ul>
          <div className="hamburger-menu" onClick={handleClick}>
            {
              mobileOpen
                ? <Close />
                : <Hamburger />
            }
          </div>
      </div>
      <div className={`mobile-slideout ${mobileOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <NavLink to='/' onClick={handleClick}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about' onClick={handleClick}>About</NavLink>
          </li>
          <li>
            <NavLink to='/create-plan' onClick={handleClick}>Create Your Plan</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar;