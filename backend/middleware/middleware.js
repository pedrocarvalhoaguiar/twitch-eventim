import { verify } from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  verify(token, 'your_jwt_secret', (error, user) => {
    if (error) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

export default { authenticateToken };