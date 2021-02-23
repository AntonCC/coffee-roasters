import React, { useState, useEffect } from 'react'
import './subscription-option.scss'
import { ReactComponent as Arrow } from '../../assets/plan/desktop/icon-arrow.svg'

interface Props {
  id: number,
  activeSectionId: number,
  setActiveSectionId: (active: number) => void 
  title: string,
}

const SubscriptionOption: React.FC<Props> = ({ id, activeSectionId, setActiveSectionId, title }) => {
  const [open, setOpen] = useState(false)
  const [prevActiveId, setPrevActiveId] = useState(0)

  const handleClick = () => {
    setActiveSectionId(id)
    setOpen(!open)
  }

  useEffect(() => {

  }, [activeSectionId])

  return (
    <div className='subscription-option'>
      <div className="option-bar" onClick={handleClick}>
        <h2>{ title }</h2>
        <Arrow />
      </div>
      <div className={`drop-down ${open ? 'open' : ''}`}></div>
    </div>
  )
}

export default SubscriptionOption;