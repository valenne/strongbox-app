import { getDateRecord } from '../assets/js/getTimer.js'
import { Key } from '../db/model/Keys.js'
import { User } from '../db/model/User.js'

export const dashboardController = {
  getDashboard: async (req, res) => {
    const headers = req.headers

    try {
      const user = await User.findOne({ _id: headers.id })
      const userKeys = await Key.find({ user: headers.id })

      const responseUser = {
        firstname: user.firstName,
        lastname: user.lastName,
        username: user.username,
        email: user.email,
        avatarImage: user.avatarImage
      }

      // sending a general data, not the correct values, just for complete the card information
      const responseKeys = userKeys.map(key => {
        return {
          _id: key._id,
          category: key.category,
          categoryImg: key.categoryImg,
          serviceName: key.serviceName,
          description: 'secret description',
          password: '******',
          hasPin: key.hasPin,
          createAt: 'secret create date',
          updateAt: 'secret update date'
        }
      })

      res.status(200).send({ user: responseUser, userKeys: responseKeys })
    } catch (err) {
      console.log(`${getDateRecord()} - ${err.message}`)
    }
  },
  postDashboard: (req, res) => {
    res.status(200).send({ status: 'success', msg: 'token validate' })
  },
  getDataCard: async (req, res) => {
    const { id, pin } = req.headers

    try {
      const information = await Key.findOne({ _id: id })

      // create specific data
      const responseKey = {
        category: information.category,
        serviceName: information.serviceName,
        savePassword: information.savePassword,
        description: information.description,
        createAt: information.createAt,
        updateAt: information.updateAt
      }

      if (!information.hasPin) {
        return res.status(200).send(responseKey)
      }

      if (pin) {
        console.log({ be: information.pin, ff: pin })
        return information.pin === pin
          ? res.send(responseKey)
          : res.send({ error: 'Failure to match data' })
      }
    } catch (err) {
      console.log(`${getDateRecord()} - ${err.message}`)
    }

    // res.status(200).send({ id, msg: 'todo ok' })
  }
}
