import userService from '../services/userService.js'
import jwt from 'jsonwebtoken';

const getUserById = async (req, res) => {
  const userId = req.params.id;
  const user = await userService.getUserById(userId);
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

const createUser = async (req, res) => {
  const userData = req.body;

  if (!userData?.email) {
    res.status(400).json({ message: "Can't create user without email" });
  }

  try {
    let user = await userService.getUserByEmail(userData.email);

    if (!user) {
      user = await userService.createUser(userData);
      res.status(201).json({ message: 'User registered successfully' });
    } else {
      res.status(400).json({ message: 'E-mail already in use' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const updateUser = async (req, res) => {
  const userId = req.params.id;
  const updatedUserData = req.body;
  const updatedUser = await userService.updateUser(userId, updatedUserData);
  if (updatedUser) {
    res.json(updatedUser);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

const deleteUser = async (req, res) => {
  const userId = req.params.id;
  const deletedUser = await userService.deleteUser(userId);
  if (deletedUser) {
    res.json({ message: 'User deleted successfully' });
  } else {
    res.status(404).json({ error: 'User not found' });
  }
};

const loginUser = async (req, res) => {
  const userData = req.body;

  if (!userData?.email) {
    res.status(400).json({ message: "Can't create user without email" });
  }

  try {
    const user = await userService.getUserByEmail(userData.email);

    if (!user || !await user.isValidPassword(userData.password)) {
      res.status(400).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ userId: user.id }, 'your_jwt_secret', {expiresIn: '1h'});
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

const userController = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  loginUser
};

export default userController
