import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import sequelize from '../database/postgres.js';
import User from '../models/userModel.js';

const Event = sequelize.define('Event', {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    startDatetime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    endDatetime: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    image: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
    miniatureImage: {
        type: DataTypes.BLOB,
        allowNull: true,
    },
});

Event.belongsTo(User, {
    foreignKey: {
        name: 'ownedBy',
        allowNull: false,
    },
});

export default Event;
