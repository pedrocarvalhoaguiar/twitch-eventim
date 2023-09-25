import { DataTypes } from 'sequelize';
import sequelize from '../database/postgres.js';
import Event from '../models/eventModel.js';
import User from '../models/userModel.js';

const Subscription = sequelize.define('subscription', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    allowNull: false,
    primaryKey: true,
  },
});


User.belongsToMany(Event, { through: Subscription, foreignKey: 'userId' });
Event.belongsToMany(User, { through: Subscription, foreignKey: 'eventId' });

export default Subscription;