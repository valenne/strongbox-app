import axios from 'axios'

export async function registerUser (formData) {
  try {
    const response = await axios.post(
      'http://localhost:3000/register-user',
      formData
    )

    return response.data
  } catch (e) {
    const error = e.response.data

    return error
  }
}
