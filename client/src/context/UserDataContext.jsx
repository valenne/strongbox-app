import { createContext, useRef } from 'react'

export const UserDataContext = createContext()

export function UserDataContextProvider ({ children }) {
  const loginInfo = useRef(null)

  return (
    <UserDataContext.Provider value={{ loginInfo }}>
      {children}
    </UserDataContext.Provider>
  )
}
