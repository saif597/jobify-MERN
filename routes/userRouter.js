import { Router } from 'express'
import {
  getApplicationStatus,
  getCurrentUser,
  updateUser,
} from '../controllers/userControoler.js'
import { validateUpdateUserInput } from '../middleware/validationMiddleware.js'
import {
  authorizePersmissions,
  checkForTestUser,
} from '../middleware/authMiddleware.js'
import upload from '../middleware/multerMiddleware.js'
const router = Router()

router.get('/current-user', getCurrentUser)
router.get('/admin/app-stats', [
  authorizePersmissions('admin'),
  getApplicationStatus,
])
router.patch(
  '/update-user',
  checkForTestUser,
  upload.single('avatar'),
  validateUpdateUserInput,
  updateUser
)
export default router
