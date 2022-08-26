const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class User extends Model {};

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
            len: {
                args: [6, 20],
                msg: "Must have more than 6 characters."
            }
        }
    },
    password: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: true, //cannot be an empty string
            notNull: true, //cannot be null
            isUppercase: true, //must have an uppercase letter
            isLowercase: true, //must have a lower case letter
            isInt: true,    //must have an integer
            isIn: [['!','@','#','$','%','^','&','*','(',')']], //must have one of the following characters
            len: [8, 14], //allow length of password to be between 8 and 16 characters
        }
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},
{
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'user',
})