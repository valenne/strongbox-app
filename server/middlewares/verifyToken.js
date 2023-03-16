import jwt from 'jsonwebtoken'
import { envConfig } from '../config/env.config.js'

// middleware to validate token (rutas protegidas)
export const verifyToken = (req, res, next) => {
  const token = req.header('x-auth-token')
  console.log(token)
  if (!token) return res.status(401).json({ error: 'Acceso denegado' })
  try {
    const verified = jwt.verify(token, envConfig.token)
    req.user = verified
    next() // continuamos
  } catch (error) {
    res.status(400).json({ error: 'token no es válido' })
  }
}
