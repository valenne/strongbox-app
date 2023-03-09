import { User } from '../db/model/User.js'
import bcrypt from 'bcrypt'
import { envConfig } from '../config/env.config.js'
import { randomPassword } from '../assets/js/randomPassword.js'

export const registerController = {
  postRegister: async (req, res) => {
    const response = req.body
    let { firstName, lastName, email, password, question, answer, username } =
      response

    if (!response) {
      return res.status(400).json({ error: 'required parameter missing' })
    }

    async function createUser (hash) {
      try {
        const user = await User.create({
          firstName,
          lastName,
          username,
          email,
          password: hash,
          recoveryLogin: {
            question,
            answer,
            recoveryPassword: randomPassword(),
            hasData: password ? true : false
          }
        })
        await user.save()
        // console.log(user)

        return {
          firstName: user.firstName,
          lastName: user.lastName,
          recovery: user.recoveryLogin.recoveryPassword
        }
      } catch (e) {
        return console.log(e.message)
      }
    }
    // se creo el dato y guardado en base de datos, cuando termine de guardar enviar informacion y redirigir a index

    bcrypt
      .hash(password, envConfig.saltRounds)
      .then(async hash => {
        const retrieveData = await createUser(hash)

        res.status(200).send({ status: 'success', values: retrieveData })
      })
      .catch(err => {
        console.log(err.message)
        res.status(400).send({ error: err.message })
      })
  }
}
