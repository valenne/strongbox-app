import axios from 'axios'

export async function axiosKeyHandle (id, formData, verb, pathname) {
  try {
    const response = await axios[verb](
      `http://localhost:3000/${pathname}`,

      {
        headers: {
          id,
          formData
        }
      }
    )

    return response.data
  } catch (err) {
    console.log(err.message)
    return { status: 'Error', code: 500 }
  }
}
