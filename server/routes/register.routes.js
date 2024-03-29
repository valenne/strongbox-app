import { Router } from 'express'
// importing register controller
import { registerController } from '../controllers/register.controllers.js'

// instantiate router
const router = Router()

router.post('/register', registerController.postRegister)

export { router as registerRouter }
