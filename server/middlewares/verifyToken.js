import jwt from 'jsonwebtoken'
import { envConfig } from '../config/env.config.js'
import { getDateRecord } from '../assets/js/getTimer.js'

// middleware to validate token (rutas protegidas)
export const verifyToken = (req, res, next) => {
  const { authentication } = req.headers

  if (!authentication) return res.status(401).json({ error: 'Acceso denegado' })

  jwt.verify(authentication, envConfig.token, (err, decoded) => {
    if (!decoded) console.log(`${getDateRecord()} - token expired`)

    if (err) {
      return res.status(401).json({ error: 'token no es válido' })
    }

    req.user = decoded

    console.log(`${getDateRecord()} - token verified`)

    next() // continuamos
  })
}
