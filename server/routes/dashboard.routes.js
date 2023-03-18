import { Router } from 'express'
import { dashboardController } from '../controllers/dashboard.controllers.js'
import { verifyToken } from '../middlewares/verifyToken.js'

// instantiate Router
const router = Router()

router.get('/dashboard/user/:id', dashboardController.getDashboard)
router.post('/dashboard', verifyToken, dashboardController.postDashboard)

export { router as dashboardRouter }
