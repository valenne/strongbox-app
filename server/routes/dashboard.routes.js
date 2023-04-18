import { Router } from 'express'
import { dashboardController } from '../controllers/dashboard.controllers.js'
import { verifyToken } from '../middlewares/verifyToken.js'

// instantiate Router
const router = Router()

router.get('/dashboard', verifyToken, dashboardController.getDashboard)
router.post('/dashboard', verifyToken, dashboardController.postDashboard)
router.get('/data-card', dashboardController.getDataCard)

export { router as dashboardRouter }
