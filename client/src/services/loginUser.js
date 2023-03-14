import axios from 'axios'

export async function loginUser (loginData) {
  try {
    const response = await axios.post(
      'http://localhost:3000/login-user',
      loginData
    )

    return response
  } catch (e) {
    console.log(e.response.data.error)
    const error = e.response
    return error
  }
}
