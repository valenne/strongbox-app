import axios from 'axios'

export async function loginUser (loginData) {
  try {
    const response = await axios.post(
      'http://localhost:3000/login-user',
      loginData
    )

    console.log('charmander', response)
  } catch (e) {
    console.log(e.message)
  }
}
