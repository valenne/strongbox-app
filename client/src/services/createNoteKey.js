import axios from 'axios'

export async function createNewKey (id, formData) {
  try {
    const response = await axios.post('http://localhost:3000/create-key', {
      id,
      formData
    })

    return response.data
  } catch (e) {
    // const error = e.response.data
    return console.log(e.message)
  }
}
