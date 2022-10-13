const sequelize = require('../../database/index');

const { DataTypes } = require('sequelize');
const User = require('../User/model');

const Comment = sequelize.define('Comment', {
    commentID : {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    userID : {
        type : DataTypes.INTEGER,
        references : {
            model: User,
            key: 'userID'
        }
    },
    message: {
        type: DataTypes.STRING
    }
})

module.exports = Comment