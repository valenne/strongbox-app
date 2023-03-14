import { useEffect, useState, useContext } from 'react'

import { UserDataContext } from '../context/UserDataContext.jsx'

export function useCredential () {
  const { loginInfo } = useContext(UserDataContext)

  const [responseLogin, setResponseLogin] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    if (responseLogin.data?.token) {
      loginInfo.current = responseLogin
      return
    }

    if (responseLogin.data?.error === 'Invalid password') {
      setError('password do not match')
      return
    }
    if (responseLogin.data?.error === 'User not found') {
      setError('user not found')
      return
    }

    setError(null)
  }, [responseLogin])

  setTimeout(() => {
    setError(null)
  }, 3000)

  return { error, setResponseLogin }
}
