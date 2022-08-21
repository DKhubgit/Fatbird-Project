const router = require('express').Router();

// Render the homepage
router.get('/', async (req, res) => {
    res.render('homepage');
});

// Render the about me page
router.get('/about', async (req, res) => {
    res.render('about');
});

module.exports = router;