const sequelize = require('../../database/index');

const { DataTypes } = require('sequelize');
const University = require('../University/model');

const Alumni = sequelize.define('Alumni', {
    alumniID : {
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
    alumnus_name: {
        type: DataTypes.STRING
    },
    job: {
        type: DataTypes.STRING
    },
    alumnus_image: {
        type: DataTypes.TEXT
    }
})

module.exports = Alumni