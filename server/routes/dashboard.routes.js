import { Router } from 'express'
import { dashboardController } from '../controllers/dashboard.controllers.js'

// instantiate Router
const router = Router()

router.get('/dashboard', dashboardController.getDashboard)

export { router as dashboardRouter }
