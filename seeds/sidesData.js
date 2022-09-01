const Sides = require('../model/Side');

const sidesData = [
    {
        title: 'Ranch',
        cat_id: 1,
    },
    {
        title: 'Bleu Cheese',
        cat_id: 1,
    },
    {
        title: 'Honey Mustard',
        cat_id: 1,
    },
    {
        title: 'Fat Sauce',
        cat_id: 1,
    },
    {
        title: 'Sweet Chili',
        cat_id: 1,
    },
    {
        title: 'Mexi Cali',
        cat_id: 2,
    },
    {
        title: 'Truffle',
        cat_id: 2,
    },
    {
        title: 'Bleu Fries',
        cat_id: 2,
    },
    {
        title: 'Sweet Chili',
        cat_id: 2,
    },
    {
        title: 'Buffalo Chicken',
        cat_id: 2,
    },
    {
        title: 'Bacon & Cheese',
        cat_id: 2,
    },
    {
        title: 'Sour Cream & Onion',
        cat_id: 2,
    },
    {
        title: 'Plain Fries',
        cat_id: 2,
    },
    {
        title: 'Sweet Potato Fries',
        cat_id: 2,
    },
    {
        title: 'Caesar',
        cat_id: 3,
    },
    {
        title: 'Bleu Wedge',
        cat_id: 3,
    },
    {
        title: 'Sesame Soy',
        cat_id: 3,
    },
    {
        title: 'Classic',
        cat_id: 4,
    },
    {
        title: 'Buffalo',
        cat_id: 4,
    },
    {
        title: 'BBQ',
        cat_id: 4,
    },
    {
        title: 'Nashville Hot',
        cat_id: 4,
    },
    {
        title: 'Truffalo',
        cat_id: 4,
    },
    {
        title: 'Garlic Noodles',
        cat_id: 5,
    },
    {
        title: 'Pot Stickers',
        cat_id: 5,
    },
    {
        title: 'Carrots/Celery',
        cat_id: 5,
    },
    {
        title: "Mac n' Cheese",
        cat_id: 5,
    },
    {
        title: 'Hot Cheeto Mac',
        cat_id: 5,
    },
    {
        title: 'Egg Rolls',
        cat_id: 5,
    },
    {
        title: 'Fried Pickles',
        cat_id: 5,
    },
    {
        title: 'Mochi (Pick 2: Strawberry, Mango, Coffee, Green Tea)',
        cat_id: 6,
    },
]

const seedSidesData = () => Sides.bulkCreate(sidesData);

module.exports = seedSidesData;