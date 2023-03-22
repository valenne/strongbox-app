import { createContext, useState } from 'react'

export const HelperContext = createContext()

export function HelperContextProvider ({ children }) {
  const [inDashboard, setInDashboard] = useState(false)

  return (
    <HelperContext.Provider value={{ setInDashboard, inDashboard }}>
      {children}
    </HelperContext.Provider>
  )
}
