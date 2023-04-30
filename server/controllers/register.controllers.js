import bcrypt from 'bcrypt'
import { randomPassword } from '../assets/js/randomPassword.js'
import { envConfig } from '../config/env.config.js'
import { User } from '../db/model/User.js'

import { getDateRecord } from '../assets/js/getTimer.js'

export const registerController = {
  postRegister: async (req, res) => {
    const response = req.body

    if (!response) {
      return res.status(400).json({ error: 'required parameter missing' })
    }

    let { firstName, lastName, email, password, question, answer, username } =
      response

    const isEmailExist = await User.findOne({ email: email })
    if (isEmailExist) {
      console.log(`${getDateRecord()} - email already exist`)
      return res
        .status(400)
        .json({ error: 'Email has already been registered' })
    }

    try {
      const hashedPwd = await bcrypt.hash(password, envConfig.saltRounds)

      // const urlImage = await getImageFromAPi()
      const urlImage = `https://api.multiavatar.com/${firstName} ${lastName}.svg`

      const stored = {
        firstName,
        lastName,
        username,
        avatarImage: urlImage,
        email,
        password: hashedPwd,
        recoveryLogin: {
          question,
          answer,
          recoveryPassword: randomPassword(),
          hasData: password ? true : false
        }
      }

      const insertResult = await User.create(stored)

      console.log(`${getDateRecord()} - register user successfully`)

      res.status(200).send({
        status: 'Ok',
        code: 200,
        values: {
          firstName: insertResult.firstName,
          lastName: insertResult.lastName,
          recovery: insertResult.recoveryLogin.recoveryPassword
        }
      })
    } catch (e) {
      console.log(`${getDateRecord} - register user failed`)
      res.status(400).send({ status: 'failed', code: 400, values: null })
    }
  }
}
