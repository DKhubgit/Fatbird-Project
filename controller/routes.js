const router = require('express').Router();

// Render the homepage
router.get('/', async (req, res) => {
    res.render('homepage');
});

module.exports = router;