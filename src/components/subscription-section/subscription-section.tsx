import React, { useState, useEffect } from 'react'
import './subscription-section.scss'

interface Props {
  sectionNum: string,
  title: string,
  active?: boolean
  handleClick?: () => void
}

const SubscriptionSection: React.FC<Props> = ({ sectionNum, title }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    setActive(!active)
  }

  useEffect(() => {
    console.log('Section active state changed.')
  }, [active])

  return (
    <div className={`subscription-section ${active ? 'active' : ''}`} onClick={handleClick}>
      <h4><span>{ sectionNum }</span>{ title }</h4>
    </div>
  )
}

export default SubscriptionSection;