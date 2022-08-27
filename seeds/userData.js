//NOTE: THIS IS ONLY FOR TESTING PURPOSES
//NOT ACTUAL LOGIN INFO

const sequelize = require("../config/config");
const { User } = require("../model/User");

const userData = [
    {
        username: "dannyyo",
        password: "whatpassword",
        is_admin: true,
    }
]

async function create() {
    await User.sync(); //creates the table, does not do anything if table exists
    await User.create(userData[0]); //insert query to table
    process.exit(0); //without this it keeps on running, must have.
}

create();

