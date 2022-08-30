const router = require('express').Router();

//libraries for authenticating using Passport.js (will need to move this in the future for modularity).
const passport = require('passport');
const LocalStrategy = require('passport-local');
const bcrypt = require('bcrypt');
const { User } = require('../model/User');

//works
router.get('/login', (req,res) => {
    res.render('login');
});

router.get('/home', (req,res) => {
    res.render('homepage');
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/admin/home',
    failureRedirect: '/admin/login',
}))

//works
router.get('/register', (req,res) => {
    res.render('register');
})

//works
router.post('/register', async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(req.body.email)
        const user = { username: email, password: password, is_admin: true};
        const newUser = await User.create(user)
        res.status(200).redirect('/admin/login')
    } catch (err) {
        //double check correct status code
        res.status(404).json(err)
    }
})

//maybe change message so it's not too 'hinting'
passport.use(new LocalStrategy( {usernameField: 'email'}, async (email, password, callback) => {
    const user = await User.findAll({ where: {username: email}, raw: true})
    if (!user) {
        return callback(null, false, {message: "unsuccessful user"})
    }

    const verifyPass = await bcrypt.compare(password, user[0].password)
    
    if (verifyPass) {
        return callback(null, user);
    } else {
        return callback(null, false, {message: "unsuccessful verification"})
    }

}))

module.exports = router;