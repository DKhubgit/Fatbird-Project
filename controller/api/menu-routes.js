const router = require('express').Router();

const { Sauce } = require('../../model/Sauce');
const { SidesCategory, Sides } = require('../../model');

// default route for all below is /api/menu

// Current Sauces
router.get('/sauce', async (req, res) => {
    try {
        const dbSauceData = await Sauce.findAll();

        res.status(200).json(dbSauceData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get one Sauce
router.get('/sauce/:id', async (req, res) => {
    try {
        const dbSauceData = await Sauce.findByPk(req.params.id);

        res.status(200).json(dbSauceData);
    } catch (err) {
        res.status(500).json(err);
    }
})

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

// Delete a sauce
router.delete('/sauce/:id', async (req, res) => {
    try {
        const sauceData = await Sauce.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!sauceData) {
            res.status(404).json({ message: 'No sauce found with that id!' });
            return;
        }
        res.status(200).json(sauceData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Current Side Categories
router.get('/sidesCategory', async (req, res) => {
    try {
        const dbSideCategoryData = await SidesCategory.findAll({
            include: [
                {
                    model: Sides,
                    attributes: ['title'],
                },
            ],
        });

        res.status(200).json(dbSideCategoryData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Get one Side Category
router.get('/sidesCategory/:id', async (req, res) => {
    try {
        const dbSideCategoryData = await SidesCategory.findByPk(req.params.id, {
            include: [
                {
                    model: Sides,
                    attributes: ['title'],
                },
            ],
        });

        res.status(200).json(dbSideCategoryData);
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

// Delete a Side Category
router.delete('/sidesCategory/:id', async (req, res) => {
    try {
        const sideCategory = await SidesCategory.destroy({
            where: {
                id: req.params.id,
            },
        });

        if(!sideCategory) {
            res.status(404).json({ message: "No side category found with that id!"});
            return;
        }

        res.status(200).json(sideCategory);
    } catch (err) {
        res.status(500).json(err);
    }
})

// Current Sides
router.get('/side', async (req, res) => {
    try {
        const dbSideData = await Sides.findAll();

        res.status(200).json(dbSideData);
    } catch (err) {
        res.status(500).json(err);
    }
})

// GET one Side 
router.get('/side/:id', async (req, res) => {
    try {
        const dbSideData = await Sides.findByPk(req.params.id);

        res.status(200).json(dbSideData);
    } catch (err) {
        res.status(500).json(err);
    }
})

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

// Delete a side
router.delete('/side/:id', async (req, res) => {
    try {
        const sideData = await Sides.destroy({
            where: {
                id: req.params.id,
            },
        });
        if (!sideData) {
            res.status(404).json({ message: 'No side found with that id!' });
            return;
        }
        res.status(200).json(sideData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;