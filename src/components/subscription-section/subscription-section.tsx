import React, { useState, useEffect } from 'react'
import './subscription-section.scss'

interface Props {
  id: number,
  activeSectionId: number,
  setActiveSectionId: (active: number) => void,
  sectionNum: string,
  title: string,
}

const SubscriptionSection: React.FC<Props> = ({ id, activeSectionId, setActiveSectionId, sectionNum, title }) => {
  const [active, setActive] = useState(false)

  useEffect(() => {
    if(activeSectionId === id) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [activeSectionId])

  // const handleClick = () => {
  //   setActiveSectionId(id)
  // }

  return (
    <div className={`subscription-section ${active ? 'active' : ''}`}>
      <h4><span>{ sectionNum }</span>{ title }</h4>
    </div>
  )
}

export default SubscriptionSection;