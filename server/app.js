import express from 'express'
import { mongooseConnected } from './db/db.connect.js'
import cors from 'cors'
import cookieParser from 'cookie-parser'

// importing Routes
import {
  registerRouter,
  loginRouter,
  dashboardRouter
} from './routes/app.routes.js'

// envConfiguration
import { envConfig } from './config/env.config.js'

const app = express()
// db connection
mongooseConnected()

// middleware
app.use(cookieParser())
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(registerRouter, loginRouter, dashboardRouter)

app.listen(envConfig.serverPort, () => {
  console.log(`Server up on port: http://localhost:${envConfig.serverPort}`)
})
