
const Sides = require('./Side');
const SidesCategory = require('./SidesCategory');

Sides.belongsTo(SidesCategory, {
    foreignKey: 'cat_id',
});

SidesCategory.hasMany(Sides, {
    foreignKey: 'cat_id',
});