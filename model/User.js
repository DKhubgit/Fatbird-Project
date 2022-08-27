const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const bcrypt = require('bcrypt');

class User extends Model {};

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notEmpty: true,
            len: [6, 20],
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, //cannot be an empty string
            notNull: true, //cannot be null
            len: [8, 14], //allow length of password to be between 8 and 16 characters
            is: /[a-z]/, //includes a lowercase letter
            is: /[A-Z]/, //includes an uppercase letter
            is: /[0-9]/, //includes a number
            is: /[!@#$%^&*()]/, //includes a special character
        }
    },
    is_admin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }
},
{
    hooks: {
        async beforeCreate(user) {
            user.password = await bcrypt.hash(user.password, 2);
            return user;
        },
    },
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'user',
});

module.exports = { User };