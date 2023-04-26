import axios from 'axios'

export async function axiosKeyHandle (id, formData, verb) {
  try {
    const response = await axios[verb]('http://localhost:3000/card', {
      headers: {
        id,
        formData
      }
    })

    return response.data
  } catch (e) {
    // const error = e.response.data
    return console.log(e.message)
  }
}
