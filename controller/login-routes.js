const router = require('express').Router();
const { User } = require('../model/User');
const passport = require("../config/passport");
require('dotenv').config();

router.get('/login', (req,res) => {
    res.render('login');
});

router.get('/loginAgain', (req,res) => {
    res.render('logAgain');
})

router.get('/user', (req,res) => {
    res.render('user');
})

router.post('/login', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/admin/loginAgain',
}))

router.post('/loginAgain', passport.authenticate('local', {
    successRedirect: '/user',
    failureRedirect: '/admin/loginAgain',
}))

router.get('/logout', (req,res) => {
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

router.get('/register', (req,res) => {
    res.render('register');
})

router.get('/registerAgain', (req,res) => {
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