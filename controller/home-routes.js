const router = require('express').Router();
const { Sauce } = require('../model/Sauce');

// Render the homepage
router.get('/', async (req, res) => {
    res.render('homepage');
});

// Render the about me page
router.get('/about', async (req, res) => {
    res.render('about');
});

// Render the menu page
router.get('/menu', async (req, res) => {
    res.render('menu');
});

// Render the sauce page
router.get('/menu/sauces', async (req, res) => {
    try {
        const dbSauceData = await Sauce.findAll();

        const sauces = dbSauceData.map((sauce) => {
            sauce.get({ plain: true })
        });
        
        res.render('menu', {sauces});
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;