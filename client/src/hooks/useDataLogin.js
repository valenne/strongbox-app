import { useEffect, useState } from 'react'

export function useCredential () {
  const [responseLogin, setResponseLogin] = useState({})
  const [error, setError] = useState(null)

  useEffect(() => {
    if (responseLogin.data?.token) {
      setError(null)

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

  return { error, setResponseLogin, responseLogin }
}
