const router = require('express').Router();
const { User } = require('../model/User');
const passport = require("../config/passport");
const check = require('../utils/auth')
require('dotenv').config();

router.get('/login', check.checkAuth, (req,res) => {
    res.render('login');
});

router.get('/loginAgain', check.checkAuth, (req,res) => {
    res.render('logAgain');
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/admin/loginAgain',
}))

router.post('/loginAgain', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/admin/loginAgain',
}))

router.get('/logout', check.isAuth, (req,res) => {
    res.render('logout');
})

router.post('/logout', (req,res) => {
    req.logout((err) => {
        if (err) {
            res.status(401).json(err);
        }
    });
    res.redirect("/");
})

router.get('/register', check.checkAuth, (req,res) => {
    res.render('register');
})

router.get('/registerAgain', check.checkAuth, (req,res) => {
    res.render('registerAgain');
})


router.post('/register', async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = { username: email, password: password, is_admin: true};
        if (req.body.key === process.env.OWNER_REGISTER_KEY) {
            await User.create(user);
            res.status(200).redirect('/admin/login');
        } else {
            res.status(401).redirect('/admin/registerAgain')
        }
    } catch (err) {
        res.status(401).redirect('/admin/registerAgain');
    }
})

router.post('/registerAgain', async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = { username: email, password: password, is_admin: true};
        if (req.body.key === process.env.OWNER_REGISTER_KEY) {
            await User.create(user);
            res.status(200).redirect('/admin/login');
        } else {
            res.status(401).redirect('/admin/registerAgain')
        }
    } catch (err) {
        res.status(401).redirect('/admin/registerAgain');
    }
})

module.exports = router;