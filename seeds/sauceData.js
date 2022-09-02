
const {Sauce} = require('../model/Sauce');

const sauces = [
    {
        title: 'Aloha',
        description: 'Pineapple & Teriyaki. Aloha from the islands!',
        spicy_level: 0,
    },
    {
        title: 'BBQ',
        description: 'Smokey, Tangy goodness! Choose: Regular or Honey.',
        spicy_level: 0,
    },
    {
        title: 'Buffalo',
        description: 'A Classic! Choose: Mild, Hot, or Insane.',
        spicy_level: 1,
    },
    {
        title: 'Garlic Parm',
        description: "Hope you're not on a date! Oodles of Garlic n Parm.",
        spicy_level: 0,
    },
    {
        title: 'Lemon Pepper',
        description: 'Fresh lemon + cracked pepper = Delicious!',
        spicy_level: 0,
    },
    {
        title: 'Mango Habanero',
        description: 'Sweet mangoes. Fiery habaneros!',
        spicy_level: 2,
    },
    {
        title: 'Mexi Cali',
        description: 'Mexican flavors in west coast fashion!',
        spicy_level: 0,
    },
    {
        title: 'Orange',
        description: 'Chinese style orange sauce!',
        spicy_level: 0,
    },
    {
        title: 'Satay',
        description: 'Peanuts & spices made into a savory sauce!',
        spicy_level: 0,
    },
    {
        title: 'Seoul St.',
        description: 'Korean flavors sure to warm your soul!',
        spicy_level: 1,
    },
    {
        title: 'Sweet Saigon',
        description: 'Sweet and savory in every bite.',
        spicy_level: 0,
    },
    {
        title: 'Thai Sweet Chili',
        description: 'Fresh flavors, sweet chili, thai-rific!',
        spicy_level: 0,
    },
    {
        title: 'Truffalo',
        description: 'Real Truffles in buffalo sauce! (Order of 6) + 2',
        spicy_level: 1,
    }
]

const seedSauces = () => Sauce.bulkCreate(sauces);

module.exports = seedSauces;