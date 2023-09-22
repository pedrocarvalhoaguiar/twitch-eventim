import { Router } from 'express';
const router = Router();
import { sign } from 'jsonwebtoken';
import { User } from '../database/db';

router.post('/register', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.create({ email, password });
    res.json({ user, message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const isValidPassword = await user.isValidPassword(password);
    if (!isValidPassword) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = sign({ userId: user.id }, 'your_jwt_secret');
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
