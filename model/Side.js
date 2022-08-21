const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Sides extends Model {};

Sides.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    cat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: id,
        }
    }
},
{
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'sides',
});

module.exports = Sides;