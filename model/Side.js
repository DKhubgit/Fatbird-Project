const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Sides extends Model {};

Sides.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    image: {
        type: DataTypes.BLOB, //might be in a binary format
        allowNull: true,
    },
    alt_image: {
        type: DataTypes.TEXT, //text can be a long string as long as it's less than 65,535 bytes
        allowNull: true,
    },
    cat_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'category',
            key: 'id',
        }
    }
},
{
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'sides',
});

module.exports = Sides;