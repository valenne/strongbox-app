import { getDateRecord } from '../assets/js/getTimer.js'
import { User } from '../db/model/User.js'

export const dashboardController = {
  getDashboard: async (req, res) => {
    const { id } = req.params

    const user = await User.findOne({ _id: id })

    res.status(200).send({ user })
  },
  postDashboard: (req, res) => {
    res.status(200).send({ status: 'success', msg: 'token validate' })
  }
}
