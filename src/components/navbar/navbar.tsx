import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/shared/desktop/logo.svg'
import LogoMobile from '../../assets/shared/mobile/logo-mobile.svg'
import { ReactComponent as Hamburger } from '../../assets/shared/mobile/icon-hamburger.svg'

const Navbar: React.FC = () => {
  return (
    <div className='navbar container'>
        {/* <picture>
            <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
            <source media="(min-width:465px)" srcset="img_white_flower.jpg">
            <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
          </picture> */}
        <div className="logo">
          <picture>
            <source media="(max-width: 530px)" srcSet={LogoMobile} />
            <img src={Logo} alt="Logo"/>
          </picture>
        </div>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/create-plan'>Create Your Plan</NavLink>
          </li>
        </ul>
        <div className="hamburger-menu">
          <Hamburger />
        </div>
    </div>
  )
}

export default Navbar;