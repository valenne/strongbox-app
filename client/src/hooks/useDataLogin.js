import { useEffect, useState } from 'react'
import { MESSAGE_USER } from '../data/messageTypes'

export const useCredential = () => {
  const [responseLogin, setResponseLogin] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    if (responseLogin.data?.token) {
      setError(null)
      return
    }
    if (responseLogin.data?.error === MESSAGE_USER.error.userNotFound) {
      setError(MESSAGE_USER.error.userNotFound)
      return
    }
    if (responseLogin.data?.error === MESSAGE_USER.error.invalidPassword) {
      setError(MESSAGE_USER.error.invalidPassword)
      return
    }
    setError(null)
  }, [responseLogin])

  setTimeout(() => {
    setError(null)
  }, 3000)

  return { error, setResponseLogin, responseLogin }
}
