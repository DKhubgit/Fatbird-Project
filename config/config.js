const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) { //if this DB URL exists within heroku, create the connection
    sequelize = new Sequelize(process.env.JAWSDB_URL);
} else { //create a local connection
    sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PW,
        {
            host: 'localhost',
            dialect: 'mysql',
            port: 3306    // default port for mysql
        }
    );
}

module.exports = sequelize;