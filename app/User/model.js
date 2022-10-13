const sequelize = require('../../database/index');

const { DataTypes } = require('sequelize');

const User = sequelize.define('User', {
    userID : {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: DataTypes.STRING
    },
    password: {
        type: DataTypes.STRING
    }
})

module.exports = User