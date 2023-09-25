import userRepository from '../dataAccess/userRepository.js' 

const getUserById = async (userId) => {
  return await userRepository.getUserById(userId);
};

const getUserByEmail = async (userEmail) => {
  return await userRepository.getUserByEmail(userEmail);
};

const createUser = async (userData) => {
  return await userRepository.createUser(userData);
};

const updateUser = async (userId, updatedUserData) => {
  return await userRepository.updateUser(userId, updatedUserData);
};

const deleteUser = async (userId) => {
  return await userRepository.deleteUser(userId);
};

const userService = {
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  getUserByEmail
};

export default userService