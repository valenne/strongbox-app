/* eslint-disable no-undef */
import axios from 'axios'
import { storageLogic } from '../data/localStorageData.js'

export async function loginUser (loginData) {
  try {
    const response = await axios.post('http://localhost:3000/login', loginData)

    if (response.data.token) {
      storageLogic.setStorage('user', response.data, 900000)
      // localStorage.setItem('user', JSON.stringify(response.data))
    }
    return response
  } catch (e) {
    console.log(e.response.data.error)
    const error = e.response
    return error
  }
}
