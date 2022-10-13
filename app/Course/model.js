const sequelize = require('../../database/index');

const { DataTypes } = require('sequelize');
const Major = require('../Major/model');

const Course = sequelize.define('Course', {
    courseID : {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    majorID : {
        type : DataTypes.INTEGER,
        references : {
            model: Major,
            key: 'majorID'
        }
    },
    course_name: {
        type: DataTypes.STRING
    },
    credit: {
        type: DataTypes.INTEGER
    }
})

module.exports = Course