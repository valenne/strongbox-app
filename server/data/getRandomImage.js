import axios from 'axios'

export const getImageFromAPi = async () => {
  const response = await axios.post('https://pic.re/image')

  return await response.data.file_url
}
