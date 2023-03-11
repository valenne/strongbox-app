import { Router } from 'express'

// importing login controller
import { loginController } from '../controllers/login.controllers.js'

// instantiate Router
const router = Router()

router.post('/login-user', loginController.postLogin)

export { router as loginRouter }
