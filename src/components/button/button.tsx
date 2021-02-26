import React from 'react'
import './button.scss'

interface Props {
  disabled?: boolean,
}

const Button: React.FC<Props> = ({ disabled, children }) => {
  return (
    <>
      <button className={`cta-btn-primary ${disabled ? 'disabled' : ''}`}>
        { children }
      </button>
    </>
  )
}

export default Button;