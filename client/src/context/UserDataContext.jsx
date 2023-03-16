import { createContext } from 'react'

export const UserDataContext = createContext()

export function UserDataContextProvider ({ children }) {
  return (
    <UserDataContext.Provider value={{}}>{children}</UserDataContext.Provider>
  )
}
