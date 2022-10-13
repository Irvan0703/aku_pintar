const sequelize = require('../../database/index');

const { DataTypes } = require('sequelize');
const University = require('../University/model');
const User = require('../User/model');
const Comment = require('../Comments/model');

const Discuss = sequelize.define('Discuss', {
    discussID : {
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
    commentID : {
        type : DataTypes.INTEGER,
        references : {
            model: Comment,
            key: 'commentID'
        }
    },
    datePost: {
        type: DataTypes.DATE
    },
    describe: {
        type: DataTypes.STRING
    }
})

module.exports = Discuss