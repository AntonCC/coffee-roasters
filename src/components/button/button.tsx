import React from 'react'
import './button.scss'

interface Props {
  disabled?: boolean,
  handleClick?: () => void
}

const Button: React.FC<Props> = ({ disabled, children, handleClick }) => {
  return (
    <>
      <button className={`cta-btn-primary ${disabled ? 'disabled' : ''}`} onClick={handleClick}>
        { children }
      </button>
    </>
  )
}

export default Button;