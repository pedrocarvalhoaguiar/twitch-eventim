import express from 'express'
const router = express.Router();
import userController from '../controllers/userController.js'
import { authenticateToken, authenticateRefreshToken } from '../middleware/middleware.js'

router.get('/:id', authenticateToken, userController.getUserById);
router.post('/register', userController.createUser);
router.put('/:id', authenticateToken, userController.updateUser);
router.delete('/:id', authenticateToken, userController.deleteUser);
router.post('/login', userController.loginUser);
router.post('/refresh', authenticateRefreshToken, userController.refreshToken);

export default router;