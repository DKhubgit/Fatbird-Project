const router = require('express').Router();
const { Sauce } = require('../model/Sauce');
const { SidesCategory, Sides } = require('../model');

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
        
        res.render('sauces', {sauces});
    } catch (err) {
        res.status(500).json(err);
    }
});

// GET one sauce 
router.get('/menu/sauces/:id', async (req, res) => {
    try {
        const dbSauceData = await Sauce.findByPk(req.params.id);

        const sauce = dbSauceData.get({ plain: true });

        res.render('sauce', { sauce });
    } catch (err) {
        res.status(500).json(err);
    }
})

// Render Sides Category page
router.get('menu/sides', async (req, res) => {
    try {
        const dbSideCategoryData = await SidesCategory.findAll({
            include: [
                {
                    model: Sides,
                    attributes: ['title'],
                },
            ],
        });

        const sidesCategories = dbSideCategoryData.map((category) => {
            category.get({ plain: true })
        });

        res.render('sidesCategories', { sidesCategories });
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET one Side Category
router.get('/menu/sides/:id', async (req, res) => {
    try {
        const dbSideCategoryData = await SidesCategory.findByPk(req.params.id, {
            include: [
                {
                    model: Sides,
                    attributes: [
                        'id',
                        'title',
                    ],
                },
            ],
        });

        const sideCategory = dbSideCategoryData.get({ plain: true });

        res.render('sides', { sideCategory });
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET one Side
router.get('./menu/side/:id', async (req, res) => {
    try {
        const dbSideData = await Sides.findByPk(req.params.id);

        const side = dbSideData.get({ plain: true });

        res.render('side', { side });
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;