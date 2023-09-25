import express from 'express'
const router = express.Router();
import subscriptionController from '../controllers/subscriptionController.js'
import authenticateToken from '../middleware/middleware.js'

router.get('/:id', authenticateToken, subscriptionController.getSubscriptionsByUserId);
router.post('/register', authenticateToken, subscriptionController.createSubscription);
router.delete('/:id', authenticateToken, subscriptionController.deleteSubscription);

export default router;