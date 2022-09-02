const sequelize = require('../config/config');
const seedCategories = require('./categoryData');
const seedSauces = require('./sauceData');
const seedSides = require('./sidesData')
const create = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedSauces();
  
  await seedSides();

  await create();

  process.exit(0);
};

seedAll();