import { createContext, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const HelperContext = createContext()

export function HelperContextProvider ({ children }) {
  const { pathname } = useLocation()
  // set if the page is on /dashboard >>> /create-key pathname
  const [inDashboard, setInDashboard] = useState(false)
  // set the check on the key form submit
  const [inputCheck, setInputCheck] = useState(false)
  // save username
  const [userName, setUserName] = useState('')
  // set value when card is delete or update
  const [isCardChange, setIsCardChange] = useState({ status: false, verb: '' })
  // saved user info
  const [userInfo, setUserInfo] = useState(null)

  return (
    <HelperContext.Provider
      value={{
        setInDashboard,
        inDashboard,
        pathname,
        inputCheck,
        setInputCheck,
        userName,
        setUserName,
        setIsCardChange,
        isCardChange,
        setUserInfo,
        userInfo
      }}
    >
      {children}
    </HelperContext.Provider>
  )
}
