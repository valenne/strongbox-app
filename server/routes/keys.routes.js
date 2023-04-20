import { Router } from 'express'
import { keysController } from '../controllers/keys.controllers.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const router = Router()

router.get('/card', verifyToken, keysController.getKey)
router.post('/card', keysController.postKey)

export { router as keysRouter }
