import { Sequelize } from 'sequelize';
import UserModel from './models/user';

const sequelize = new Sequelize('your_database', 'your_username', 'your_password', {
  host: 'localhost',
  dialect: 'postgres',
});

const User = UserModel(sequelize);

export default { sequelize, User };