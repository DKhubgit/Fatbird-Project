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
        const sauces = dbSauceData.map((sauce) =>
            sauce.get({ plain: true })
        );


        res.render('sauces', { sauces });
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
router.get('/menu/sides', async (req, res) => {
    try {
        const dbSideCategoryData = await SidesCategory.findAll({
            include: [
                {
                    model: Sides,
                    attributes: ['title'],
                },
            ],
        });

        const sidesCategories = dbSideCategoryData.map((category) =>
            category.get({ plain: true })
        );

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

// Render all Sides
router.get('/menu/side', async (req, res) => {
    try {
        const dbSideData = await Sides.findAll();

        const side = dbSideData.map((sides) => {
            sides.get({ plain: true })
        });

        res.render('allSides', { side });
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET one Side
router.get('/menu/side/:id', async (req, res) => {
    try {
        const dbSideData = await Sides.findByPk(req.params.id);

        const side = dbSideData.get({ plain: true });

        res.render('side', { side });
    } catch (err) {
        res.status(500).json(err);
    }
})

// render contact page
router.get('/contact', async (req, res) => {
    res.render('contact');
})

// render login page
// not final route
router.get('/login', async (req, res) => {
    res.render('login');
})

// render user homepage
router.get('/user', async (req, res) => {
    res.render('user');
})

// render create side category
router.get('/user/createCategory', async (req, res) => {
    res.render('createCategory');
})

// render update side category list
router.get('/user/updateCategoryList', async (req, res) => {
    try {
        const dbSideCategoryData = await SidesCategory.findAll();
        const sidesCategories = dbSideCategoryData.map((category) => 
            category.get({ plain: true })
        );   
        res.render('updateCategoryList', { sidesCategories });
    } catch (err) {
        res.status(500).json(err);
    }
})

// render update a side category
router.get('/user/updateCategory/:id', async (req, res) => {
    res.render('updateCategory');
})

// render delete side category list
router.get('/user/deleteCategoryList', async (req, res) => {
    try {
        const dbSideCategoryData = await SidesCategory.findAll();
        const sidesCategories = dbSideCategoryData.map((category) => 
            category.get({ plain: true })
        );
        res.render('deleteCategoryList', { sidesCategories });
    }
    catch (err) {
        res.status(500).json(err);
    }
})

// render delete a side category
router.get('/user/deleteCategory/:id', async (req, res) => {
    res.render('deleteCategory');
})

// render create a sauce 
router.get('/user/createSauce', async (req, res) => {
    res.render('createSauce');
})

// render update sauce list
router.get('/user/updateSauceList', async (req, res) => {
    try {
        const dbSauceData = await Sauce.findAll();
        const sauces = dbSauceData.map((sauce) => 
            sauce.get({ plain: true })
        );
        res.render('updateSauceList', { sauces });
    } catch (err) {
        res.status(500).json(err);
    }
})

// render update a sauce
router.get('/user/updateSauce/:id', async (req, res) => {
    res.render('updateSauce');
})

// render delete sauce list
router.get('/user/deleteSauceList', async (req, res) => {
    try {
        const dbSauceData = await Sauce.findAll();
        const sauces = dbSauceData.map((sauce) =>
            sauce.get({ plain: true })
        );
        res.render('deleteSauceList', { sauces });
    } catch (err) {
        res.status(500).json(err);
    }
})

// render delete a sauce
router.get('/user/deleteSauce/:id', async (req, res) => {
    res.render('deleteSauce');
})

// render create a side
router.get('/user/createSide', async (req, res) => {
    res.render('createSide');
})

// render update side list
router.get('/user/updateSideList', async (req, res) => {
    try {
        const dbSideData = await Sides.findAll();

        const side = dbSideData.map((sides) => 
            sides.get({ plain: true })
        );
        res.render('updateSideList', { side });
    } catch (err) {
        res.status(500).json(err);
    }
})

// render update a side
router.get('/user/updateSide/:id', async (req, res) => {
    res.render('updateSide');
})

// render delete side list
router.get('/user/deleteSideList', async (req, res) => {
    try {
        const dbSideData = await Sides.findAll();

        const side = dbSideData.map((sides) => 
            sides.get({ plain: true })
        );
        res.render('deleteSideList', { side });
    } catch (err) {
        res.status(500).json(err);
    }
})

// render delete a side
router.get('/user/deleteSide', async (req, res) => {
    res.render('deleteSide');
})

module.exports = router;

