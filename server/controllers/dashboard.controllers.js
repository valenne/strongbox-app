import { getDateRecord } from '../assets/js/getTimer.js'

export const dashboardController = {
  getDashboard: (req, res) => {
    const test = req.params

    res.status(200).send({ user: 'working in dashboard', id: test })
  },
  postDashboard: (req, res) => {
    res.status(200).send({ status: 'success', msg: 'token validate' })
  }
}
