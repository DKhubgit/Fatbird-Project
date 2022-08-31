
const { User } = require("../model/User");

async function create() {
    await User.sync(); //creates the table, does not do anything if table exists
}

module.exports = create;

