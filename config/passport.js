const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../model/User')

passport.use(new LocalStrategy( {usernameField: 'email'}, async (email, password, callback) => {
    const user = await User.findAll({ where: {username: email}, raw: true})
    if (!user) {
        return callback(null, false)
    }

    const verifyPass = await bcrypt.compare(password, user[0].password)
    
    if (verifyPass) {
        return callback(null, user);
    } else {
        return callback(null, false)
    }

}))

passport.serializeUser(function(user, callback) {
    callback(null, user);
});
  
passport.deserializeUser(function(user, callback) {
    callback(null, user);
});

module.exports = passport;