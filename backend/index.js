import express from 'express';
import { json } from 'body-parser';
import { authenticateToken } from './middleware';
import authRoutes from './authRoutes';
import { sequelize } from './models';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(json());

app.use('/auth', authRoutes);

app.get('/dashboard', authenticateToken, (req, res) => {
  res.json({ message: 'Dashboard accessed successfully', user: req.user });
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});