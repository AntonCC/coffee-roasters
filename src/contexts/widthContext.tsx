import React, { useState, createContext } from 'react'

export const WidthContext = createContext<any>(undefined)

type Props = {
  children: React.ReactNode
}

export const WidthProvider = ({ children }: Props): JSX.Element => {
  const [width, setWidth] = useState(window.innerWidth)

  return (
    <WidthContext.Provider value={[width, setWidth]}>
      {children}
    </WidthContext.Provider>
  )
}