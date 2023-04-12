import { createContext, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const HelperContext = createContext()

export function HelperContextProvider ({ children }) {
  const { pathname } = useLocation()
  // set if the page is on /dashboard >>> /create-key pathname
  const [inDashboard, setInDashboard] = useState(false)
  // set the check on the key form submit
  const [inputCheck, setInputCheck] = useState(false)

  return (
    <HelperContext.Provider
      value={{
        setInDashboard,
        inDashboard,
        pathname,
        inputCheck,
        setInputCheck
      }}
    >
      {children}
    </HelperContext.Provider>
  )
}
