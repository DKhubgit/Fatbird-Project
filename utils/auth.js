const passport = require('../config/passport');

function isAuth(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    } 
    res.redirect('/admin/login');
}

function checkAuth(req, res, next) {
    if (req.isAuthenticated()) {
        res.redirect('/user')
    }
    return next();
}

module.exports = { isAuth, checkAuth }