import React, { useState, useEffect } from 'react'
import './select-option.scss'

interface Props {
  optionsId: number,
  selectedOptions: Array<{id: number, optionTitle: string}>,
  setSelectedOptions: (option: Array<{id: number, optionTitle: string}> ) => void,
  optionTitle: string,
  optionBody: string
}

const SelectOption: React.FC<Props> = ({ optionsId, selectedOptions, setSelectedOptions, optionTitle, optionBody }) => {
  const [active, setActive] = useState(false)

  const handleClick = () => {
    const foundOption = selectedOptions.find(options => options.id === optionsId)

    if(!foundOption) {
      setSelectedOptions([...selectedOptions, {id: optionsId, optionTitle: optionTitle}])
    } else {
      const newSelectedOptions = selectedOptions.filter(options => options.id !== optionsId)
      setSelectedOptions([...newSelectedOptions, {id: optionsId, optionTitle: optionTitle}])
    }
  }

  useEffect(() => {
    const foundOption = selectedOptions.find(options => options.id === optionsId)
    if(foundOption?.optionTitle === optionTitle) {
      setActive(true)
    } else {
      setActive(false)
    }
  }, [selectedOptions])

  return (
    <div className={`select-option ${active ? 'active' : ''}`} onClick={handleClick}>
      <h4>{ optionTitle }</h4>
      <p>{ optionBody }</p>
    </div>
  )
}

export default SelectOption;