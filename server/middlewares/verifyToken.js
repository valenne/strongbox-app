import jwt from 'jsonwebtoken'
import { getDateRecord } from '../assets/js/getTimer.js'
import { envConfig } from '../config/env.config.js'
import { User } from '../db/model/User.js'

// middleware to validate token (rutas protegidas)
export const verifyToken = async (req, res, next) => {
  const dataForHeaders = req.headers
  const dataForBody = req.body
  const id = dataForHeaders.id || dataForBody.id
  const authentication =
    dataForHeaders.authentication || dataForBody.authentication

  // the user exist on db? maybe not, we are prove

  const user = await User.findOne({ _id: id })
  if (!user) {
    console.log(`${getDateRecord()} - User has not been found`)
    return res.status(401).json({ error: 'User has not been found' })
  }

  if (!authentication) {
    console.log(`${getDateRecord()} - Acceso denegado`)
    return res.status(401).json({ error: 'Acceso denegado' })
  }

  jwt.verify(authentication, envConfig.token, (err, decoded) => {
    if (!decoded && err) console.log(`${getDateRecord()} - token expired`)

    if (err) {
      return res.status(401).json({ error: 'token is not valid' })
    }

    req.user = decoded

    console.log(`${getDateRecord()} - token verified`)

    next() // continuamos
  })
}
