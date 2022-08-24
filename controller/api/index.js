const router = require('express').Router();

const menuRoutes = require('./menu-routes');

router.use('/menu', menuRoutes);

module.exports = router;