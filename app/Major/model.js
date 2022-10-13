const sequelize = require('../../database/index');

const { DataTypes } = require('sequelize');
const University = require('../University/model');

const Major = sequelize.define('Major', {
    majorID : {
        type: DataTypes.INTEGER,
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
    major_name: {
        type: DataTypes.STRING
    },
    faculty: {
        type: DataTypes.STRING
    },
    accreditation_major: {
        type: DataTypes.STRING
    },
    student_slot: {
        type: DataTypes.INTEGER
    },
    registration: {
        type: DataTypes.STRING
    },
    passinggrade: {
        type: DataTypes.STRING
    },
    learn: {
        type: DataTypes.STRING
    },
    prospect: {
        type: DataTypes.STRING
    },
    administration_fee: {
        type: DataTypes.STRING
    },
})

module.exports = Major