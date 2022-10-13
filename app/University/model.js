const sequelize = require('../../database/index');

const { DataTypes } = require('sequelize');

const University = sequelize.define('University', {
    universityID : {
        type : DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    univ_name : {
        type: DataTypes.STRING
    },
    category : {
        type: DataTypes.STRING
    },
    status : {
        type: DataTypes.STRING
    },
    accreditation : {
        type: DataTypes.STRING
    },
    telp : {
        type: DataTypes.STRING
    },
    fax : {
        type: DataTypes.STRING
    },
    address : {
        type: DataTypes.STRING
    },
    lecturer : {
        type: DataTypes.INTEGER
    },
    students : {
        type: DataTypes.INTEGER
    },
    image_univ : {
        type: DataTypes.JSON
    },
})

module.exports = University