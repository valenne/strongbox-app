import { Router } from 'express'
import { dashboardController } from '../controllers/dashboard.controllers.js'
import { verifyToken } from '../middlewares/verifyToken.js'

// instantiate Router
const router = Router()

router.get('/dashboard', verifyToken, dashboardController.getDashboard)
router.get('/dashboard/cards', dashboardController.getDataCard)

export { router as dashboardRouter }
