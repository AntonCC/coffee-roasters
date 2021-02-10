import React from 'react'
import './button.scss'


const Button: React.FC = ({ children }) => {
  return (
    <>
      <button className='cta-btn-primary'>
        { children }
      </button>
    </>
  )
}

export default Button;