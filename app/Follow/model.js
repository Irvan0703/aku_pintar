const sequelize = require('../../database/index');

const { DataTypes } = require('sequelize');
const University = require('../University/model');
const User = require('../User/model');
const Major = require('../Major/model');

const Follow = sequelize.define('Follow', {
    followID : {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    universityID : {
        type : DataTypes.INTEGER,
        references : {
            model: University,
            key: 'universityID'
        }
    },
    userID : {
        type : DataTypes.INTEGER,
        references : {
            model: User,
            key: 'userID'
        }
    },
    majorID : {
        type : DataTypes.INTEGER,
        references : {
            model: Major,
            key: 'majorID'
        }
    },
    status: {
        type: DataTypes.STRING
    }
})

module.exports = Follow