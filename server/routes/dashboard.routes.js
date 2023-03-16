import { Router } from 'express'
import { dashboardController } from '../controllers/dashboard.controllers.js'

// instantiate Router
const router = Router()

router.get('/dashboard', dashboardController.getDashboard)
router.post('/dashboard', dashboardController.postDashboard)

export { router as dashboardRouter }
