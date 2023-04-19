import { getDateRecord } from '../assets/js/getTimer.js'
import { categoriesImg } from '../data/dataCategoriesImages.js'
import { Key } from '../db/model/Keys.js'
import { User } from '../db/model/User.js'

export const keysController = {
  getKey: async (req, res) => {
    console.log(`${getDateRecord()} - GET.keys.controller`)
    const headers = req.headers
    const user = await User.findOne({ _id: headers.id })
    res.status(200).send({ user })
  },
  postKey: async (req, res) => {
    console.log(`${getDateRecord()} - POST.keys.controller`)
    const response = req.body

    if (!response) {
      return res.status(400).json({ error: 'required parameter missing' })
    }

    const { id, formData } = response
    const { category, serviceName, password, description, pin } = formData

    // create object data
    const newKey = {
      user: id,
      category,
      categoryImg:
        categoriesImg[
          Object.keys(categoriesImg).find(k => k === category.toLowerCase())
        ],
      serviceName,
      savePassword: password,
      description,
      hasPin: pin ? true : false,
      pin: pin ? pin : ''
    }

    try {
      await Key.create(newKey)
      console.log(`${getDateRecord()} - create newKey successfully`)
      return res.status(200).send('create data success')
    } catch (err) {
      console.log(err.message)
      console.log(`${getDateRecord()} - create newKey failed`)
      res.status(400).send({ status: 'failed', code: 400, values: null })
    }

    // console.log(Object.keys(data.formData).includes('pin'))
  }
}
