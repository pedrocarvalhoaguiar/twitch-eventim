import express from 'express';
import chatController from '../controllers/chatController.js';
import { authenticateToken } from '../middleware/middleware.js'

const router = express.Router();

router.post('/:id', authenticateToken, chatController.saveMessage);
router.get('/:id', authenticateToken, chatController.getChatHistory);

export default router;