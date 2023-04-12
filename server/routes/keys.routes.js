import { Router } from 'express'
import { keysController } from '../controllers/keys.controllers.js'
import { verifyToken } from '../middlewares/verifyToken.js'

const router = Router()

router.get('/create-key', verifyToken, keysController.getKey)
router.post('/create-key', keysController.postKey)

export { router as keysRouter }
