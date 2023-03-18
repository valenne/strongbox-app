import axios from 'axios'
import { storageLogic } from '../data/localStorageData.js'

export async function getUserPermission (navigate) {
  // find if exist localstorage saved
  const localData =
    JSON.parse(storageLogic.getStorage('user')) !== null
      ? JSON.parse(storageLogic.getStorage('user'))
      : null

  if (!localData) {
    window.alert('unauthorized to access dashboard, please login')
    return navigate('/login', { replace: true })
  }

  try {
    // Authentication to route dashboard
    const { id } = localData.auth

    const isAuthorized = await axios.post(
      'http://localhost:3000/dashboard',
      id,
      {
        headers: {
          Authentication: localData.token,
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    return { isAuthorized, localData }
  } catch (e) {
    if (e.response?.data.error) {
      storageLogic.deleteStorage('user')
      window.alert('Unauthorized to access dashboard')
      return navigate('/login', { replace: true })
    }
  }
}
