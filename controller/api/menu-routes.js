const router = require('express').Router();

const { Sauce } = require('../../model/Sauce');
const { SidesCategory, Sides } = require('../../model');

// default route for all below is /api/menu

// Create Sauce
router.post('/sauce', async (req, res) => {
    try {
        const sauceData = await Sauce.create({
            title: req.body.title,
            description: req.body.description,
            spicy_level: req.body.spicy_level,
        });
        res.status(200).json(sauceData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Update a Sauce
router.put('/sauce/:id', async (req, res) => {
    try {
        const sauce = await Sauce.update(
            {
                title: req.body.title,
                description: req.body.description,
                spicy_level: req.body.spicy_level,
            },
            {
                where: {
                    id: req.params.id,
                },
            },
        );

        res.status(200).json(sauce);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Create Sides Category
router.post('/sidesCategory', async (req, res) => {
    try {
        const sidesCategoryData = await SidesCategory.create({
            title: req.body.title,
        });
        
        res.status(200).json(sidesCategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a Side Category
router.put('/sidesCategory/:id', async (req, res) => {
    try {
        const sideCategory = await SidesCategory.update(
            {
                title: req.body.title,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        res.status(200).json(sideCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Create a Side
router.post('/side', async (req, res) => {
    try {
        const sideData = await Sides.create({
            title: req.body.title,
            cat_id: req.body.cat_id,
        });

        res.status(200).json(sideData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Update a Side
router.put('/side/:id', async (req, res) => {
    try {
        const side = await Sides.update(
            {
                title: req.body.title,
                cat_id: req.body.cat_id,
            },
            {
                where: {
                    id: req.params.id,
                },
            }
        );

        res.status(200).json(side);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;