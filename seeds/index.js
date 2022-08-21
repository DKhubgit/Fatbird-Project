const sequelize = require('../config/config');
const seedCategories = require('./categoryData');
const seedSauces = require('./sauceData');
const seedSides = require('./sidesData')

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedSauces();
  
  await seedSides();

  process.exit(0);
};

seedAll();