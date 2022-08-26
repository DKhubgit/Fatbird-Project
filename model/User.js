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
        validate: {
            notEmpty: true,
            len: {
                args: [6, 20],
                msg: "Must have more than 6 characters."
            }
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true, //cannot be an empty string
            notNull: true, //cannot be null
            len: [8, 14], //allow length of password to be between 8 and 16 characters
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