import { useRef, useState } from 'react'
import { registerUser } from '../services/registerUser.js'

export const useHandleRegister = navigate => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const saveData = useRef({})

  const registerProcess = response => {
    if (Object.keys(response).length) {
      setLoading(true)
      setError('')

      registerUser(response).then(res => {
        if (res.code === 200) {
          saveData.current = res.values
          setLoading(false)
          // return navigate('/login', { replace: true })
        } else {
          setError('Duplicate value username/email already registered')
          setLoading(false)
        }
      })
    }
    setTimeout(() => {
      setError('')
    }, 2000)
  }

  return { loading, error, registerProcess, saveData }
}
