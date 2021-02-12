import React from 'react'
import './footer.scss'
import { NavLink } from 'react-router-dom'
import Logo from '../../assets/shared/desktop/logo-white.svg'
import { ReactComponent as Facebook} from '../../assets/shared/desktop/icon-facebook.svg'
import { ReactComponent as Insta} from '../../assets/shared/desktop/icon-instagram.svg'
import { ReactComponent as Twitter} from '../../assets/shared/desktop/icon-twitter.svg'

const Footer: React.FC = () => {
  return (
    <>
      <footer className='footer-main container'>
        <div className="side-a">
          <div className="logo">
            <img src={Logo} alt="Logo"/>
          </div>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/about'>About Us</NavLink>
            </li>
            <li>
              <NavLink to='/create-plan'>Create Your Plan</NavLink>
            </li>
          </ul>
        </div>
        <div className="side-b">
          <div className="social-media">
            {/* <img src={Facebook} alt="Facebook"/>
            <img src={Insta} alt="Facebook"/>
            <img src={Twitter} alt="Facebook"/> */}
            <Facebook />
            <Insta />
            <Twitter />
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;