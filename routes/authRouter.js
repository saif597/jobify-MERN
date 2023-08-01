import { Router } from 'express'
const router = Router()
import { logout, register, signin } from '../controllers/authController.js'

import {
  validateRegisterInput,
  validateSigninInput,
} from '../middleware/validationMiddleware.js'

router.post('/register', validateRegisterInput, register)
router.post('/signin', validateSigninInput, signin)
router.post('/logout', logout)
export default router
