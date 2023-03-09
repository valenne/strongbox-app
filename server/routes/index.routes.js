import { Router } from 'express'
import { indexController } from '../controllers/index.controllers.js'

// instantiate router
const router = Router()

router.get('/api', indexController.getIndex)

export { router as indexRouter }
