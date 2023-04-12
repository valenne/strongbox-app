import { Key } from '../db/model/Keys.js'
import { User } from '../db/model/User.js'

export const dashboardController = {
  getDashboard: async (req, res) => {
    const headers = req.headers
    const user = await User.findOne({ _id: headers.id })
    const userKeys = await Key.find({ user: headers.id })

    res.status(200).send({ user, userKeys })
  },
  postDashboard: (req, res) => {
    res.status(200).send({ status: 'success', msg: 'token validate' })
  }
}
