import { User } from '../db/model/User.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { envConfig } from '../config/env.config.js'

export const loginController = {
  postLogin: async (req, res) => {
    const { username, password } = req.body

    try {
      const user = await User.findOne({ username })

      if (!user) {
        console.log('User not found')
        return res.status(400).json({ error: 'User not found' })
      }

      const validPaswword = await bcrypt.compare(password, user.password)

      if (!validPaswword) {
        console.log('Password incorrect')
        return res.status(400).json({ error: 'Invalid password' })
      }

      const returnData = {
        firstname: user.firstName,
        lastname: user.lastName,
        username: user.username,
        id: user._id
      }

      const token = jwt.sign(returnData, envConfig.token)

      console.log('Login Succesfully', { returnData, token })
      res.status(200).send({ token, user: returnData })
    } catch (e) {
      console.log(e.message)
    }
  }
}
