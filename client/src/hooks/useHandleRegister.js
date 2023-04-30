import { useRef, useState } from 'react'
import { MESSAGE_USER } from '../data/messageTypes'
import { registerUser } from '../services/registerUser.js'

export const useHandleRegister = () => {
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
          setError(MESSAGE_USER.error.duplicateUser)
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
