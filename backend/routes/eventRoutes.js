import express from 'express'
const router = express.Router();
import eventController from '../controllers/eventController.js'
import { authenticateToken } from '../middleware/middleware.js'

router.get('/all', eventController.getEvents);
router.get('/by-user', authenticateToken, eventController.getEvents);
router.get('/:id', authenticateToken, eventController.getEventById);
router.post('/register', authenticateToken, eventController.createEvent);
router.put('/:id', authenticateToken, eventController.updateEvent);
router.delete('/:id', authenticateToken, eventController.deleteEvent);

export default router;