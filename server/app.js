import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { mongooseConnected } from './db/db.connect.js'

// importing Routes
import {
  dashboardRouter,
  keysRouter,
  loginRouter,
  registerRouter
} from './routes/app.routes.js'

// envConfiguration
import { envConfig } from './config/env.config.js'

const app = express()
// db connection
mongooseConnected()

// middleware
app.use('/assets', express.static('assets/img'))
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(registerRouter, loginRouter, dashboardRouter, keysRouter)

app.listen(envConfig.serverPort, () => {
  console.log(`Server up on port: http://localhost:${envConfig.serverPort}`)
})
