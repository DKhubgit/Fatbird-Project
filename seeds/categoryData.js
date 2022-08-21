const { SidesCategory } = require("../model/SidesCategory");

const categories = [
    {
        title: 'Dips',
    },
    {
        title: 'Fat Fries',
    },
    {
        title: 'Salads',
    },
    {
        title: 'Sandos',
    },
    {
        title: 'Sides',
    },
    {
        title: 'Sweets'
    }
]

const seedCategory = () => SidesCategory.bulkCreate(categories)

module.exports = seedCategory;