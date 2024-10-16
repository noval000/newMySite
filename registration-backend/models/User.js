const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    projectName: {
        type: DataTypes.STRING,
        defaultValue: '',
    },
    nameOrganisation: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    backupEmail: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    phone: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    stages: {
        type: DataTypes.JSON,
        defaultValue: {
            stage1: [],
            stage2: [],
            stage3: [],
        },
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
});

module.exports = User;
