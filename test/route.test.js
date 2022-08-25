const routes = require('../controller')
const request = require('supertest');
const express = require('express');

const app = new express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// test route for sauce db
describe('Sauce Routes', function() {
    const sauceData = {
        title: "Mild", 
        description: "Basic Sauce", 
        spicy_level: 0
    }
    // test GET request to recieve all sauce
    test('responds to /api/menu/sauce', async () => {
        const res = await request(app).get('/api/menu/sauce');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body[0].title).toBe('Aloha'); 
    });

    // test POST request to create sauce
    // test('POST  /api/menu/sauce', async () => {
    //     const res = await request(app).post("/api/menu/sauce").send(sauceData);
    //     expect(res.statusCode).toBe(200);
    //     expect(res.body.title).toBe('Mild');

        
    // })
});

// test route for side categories db
describe('Side Categories Routes', function() {
    test('responds to /api/menu/sidesCategory', async () => {
        const res = await request(app).get('/api/menu/sidesCategory');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body[1].title).toBe('Fat Fries');
        expect(res.body[1].sides[0].title).toBe('Mexi Cali');
    });
});

// test route for side db
describe('Side Routes', function() {
    test('responds to /api/menu/side', async () => {
        const res = await request(app).get('/api/menu/side');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body[26].title).toBe('Hot Cheeto Mac');
        expect(res.body[26].cat_id).toBe(5);
    })
})

