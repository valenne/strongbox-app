import axios from 'axios'

export const registerUser = formData => {
  axios.post('http://localhost:3000/register-user', formData).then(response => {
    console.log({
      status: response.status,
      statusText: response.statusText,
      _priv: response.data.values
    })
  })
}
