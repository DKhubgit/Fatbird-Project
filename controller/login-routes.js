const router = require('express').Router();
const { User } = require('../model/User');
const passport = require("../config/passport")

//works
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

//works
router.post('/register', async (req,res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const user = { username: email, password: password, is_admin: true};
        const newUser = await User.create(user)
        res.status(200).redirect('/admin/login')
    } catch (err) {
        //double check correct status code
        res.redirect('/registerAgain')
        res.status(404).json(err)
    }
})

module.exports = router;