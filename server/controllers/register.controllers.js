import { User } from '../db/model/User.js'
import bcrypt from 'bcrypt'
import { envConfig } from '../config/env.config.js'
import { randomPassword } from '../assets/js/randomPassword.js'

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
      return res
        .status(400)
        .json({ error: 'Email has already been registered' })
    }

    try {
      const hashedPwd = await bcrypt.hash(password, envConfig.saltRounds)

      const stored = {
        firstName,
        lastName,
        username,
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

      console.log(insertResult)

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
      console.log(e.message)
      res.status(400).send({ status: 'failed', code: 400, values: null })
    }
  }
}
