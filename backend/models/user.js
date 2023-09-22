import { DataTypes } from 'sequelize';
import { hash } from 'bcrypt';

export default (sequelize) => {
  const User = sequelize.define('User', {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  });

  User.beforeCreate(async (user) => {
    const hashedPassword = await hash(user.password, 10);
    user.password = hashedPassword;
  });

  return User;
};