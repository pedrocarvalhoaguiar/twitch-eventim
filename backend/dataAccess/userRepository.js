import User from '../models/userModel.js';


const getUserById = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: ['name', 'email']
  });
  return user;
};

const getUserByEmail = async (userEmail) => {
  return await User.findOne({
    where: { email: userEmail }
  });
};

const createUser = async (userData) => {
  return await User.create(userData);
};

const updateUser = async (userId, updatedUserData) => {
  const user = await User.findByPk(userId);
  if (user) {
    return await user.update(updatedUserData);
  }
  return null;
};

const deleteUser = async (userId) => {
  return await User.destroy({ where: { id: userId } });
};

const userRepository = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail
}

export default userRepository
