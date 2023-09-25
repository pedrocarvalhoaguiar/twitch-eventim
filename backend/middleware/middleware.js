import jwt from 'jsonwebtoken';

const authenticateToken = (req, res, next) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ error: 'Access denied' });

  jwt.verify(token, 'your_jwt_secret', (error, user) => {
    if (error) return res.status(403).json({ error: 'Invalid token' });
    req.user = user;
    next();
  });
};

const authenticateRefreshToken = (req, res, next) => {
  const refreshToken = req.body.refreshToken;
  if (!refreshToken) return res.status(401).json({ error: 'Refresh token not provided' });

  jwt.verify(refreshToken, 'your_jwt_secret', (error, user) => {
    if (error) return res.status(403).json({ error: 'Invalid refresh token' });
    req.user = user;
    next();
  });
};


export { authenticateToken, authenticateRefreshToken};