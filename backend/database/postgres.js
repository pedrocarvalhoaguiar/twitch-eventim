import { Sequelize } from 'sequelize';
import dotenv from 'dotenv'

dotenv.config()

const sequelize = new Sequelize(process.env.POSTGRES_DB, process.env.POSTGRES_USER, process.env.POSTGRES_PASSWORD, {
  host: 'postgres',
  dialect: 'postgres',
  port: '5433'
});

export default sequelize