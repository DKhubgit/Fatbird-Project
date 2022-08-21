const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Sauce extends Model {};

Sauce.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    modelName: 'sauce',
});

module.exports = Sauce;