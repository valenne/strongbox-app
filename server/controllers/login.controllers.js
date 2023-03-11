import { User } from '../db/model/User.js'
import bcrypt from 'bcrypt'

export const loginController = {
  postLogin: async (req, res) => {
    const { username, password } = req.body

    try {
      const user = await User.findOne({ username })

      if (user) {
        const hasCompared = await bcrypt.compare(password, user.password)

        // use jwt, limited time token, and save some info to render in dashboard
        console.log('Login Succesfully', user._id)
        res.status(200).redirect('/')
      } else {
        console.log('Username or password mismatch')
      }
    } catch (e) {
      console.log(e.message)
    }
  }
}
