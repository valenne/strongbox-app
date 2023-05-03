import axios from 'axios'
import { useCallback, useState } from 'react'
import { getUserPermission } from '../services/getUserPermission'

export function useAxios (pathname) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const { localData, isAuthorized } = getUserPermission()

  if (!isAuthorized) {
    return {
      loading,
      error,
      isAuthorized
    }
  }
  const { id } = localData.auth

  const axiosUserPermission = useCallback(async () => {
    setLoading(true)

    try {
      // throw new Error('test error axiosUserPermission')
      const response = await axios.get(
        `http://localhost:3000/${pathname.slice(1)}`,
        {
          headers: {
            id: localData.auth.id,
            authentication: localData.token
          }
        }
      )
      const data = await response.data
      setError(null)
      return data
    } catch (err) {
      console.log(err)
      setError(err)

      return { error: err.response.status }
    } finally {
      setLoading(false)
    }
  }, [])

  const axiosCardData = useCallback(async (cardId, pin, path) => {
    setLoading(true)
    try {
      const response = await axios.get(
        `http://localhost:3000/${pathname.slice(1)}/${path}`,
        {
          headers: {
            id: cardId,
            pin
          }
        }
      )
      const data = await response.data
      setError(null)
      return data
    } catch (err) {
      console.log(err.message)
      setError(err)
    } finally {
      setLoading(false)
    }
  }, [])

  return {
    axiosUserPermission,
    loading,
    error,
    isAuthorized: error ? false : true,
    id,
    axiosCardData
  }
}
