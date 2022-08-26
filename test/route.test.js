const routes = require('../controller')
const request = require('supertest');
const express = require('express');
const { Sauce } = require('../model/Sauce');

const app = new express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

// test route for sauce db
describe('Sauce Routes', function() {
    const sauceData = {
        title: "Mild", 
        description: "Basic sauce", 
        spicy_level: 0
    }
    // test GET request to recieve all sauce
    test('responds to /api/menu/sauce', async () => {
        const res = await request(app).get('/api/menu/sauce');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body[0].title).toBe('Aloha'); 
    });

    // test GET request for one sauce
    test('GET /api/menu/sauce/:id', async () => {
        const idCheck = 8;
        const res = await request(app).get(`/api/menu/sauce/${idCheck}`);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe('Orange');
        expect(res.body.description).toBe('Chinese style orange sauce!');
        expect(res.body.spicy_level).toBe(0);
    })

    // test POST request to create sauce
    test('POST /api/menu/sauce', async () => {
        const res = await request(app).post("/api/menu/sauce").send(sauceData);
        const postId = res.body.id;
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe('Mild');
        expect(res.body.description).toBe('Basic sauce');
        expect(res.body.spicy_level).toBe(0);
        await request(app).delete(`/api/menu/sauce/${postId}`);
    });

    // test PUT request to update sauce
    test('PUT /api/menu/sauce/:id', async () => {
        const addItem = await request(app).post('/api/menu/sauce').send(sauceData);
        const postId = addItem.body.id;
        const res = await request(app).put(`/api/menu/sauce/${postId}`).send({
            title: 'Mild Sauce',
            description: 'Most basic sauce in the world',
            spicy_level: 0
        })
        const getItem = await request(app).get(`/api/menu/sauce/${postId}`);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(getItem.body.title).toBe('Mild Sauce');
        expect(getItem.body.description).toBe('Most basic sauce in the world');
        expect(getItem.body.spicy_level).toBe(0);
        await request(app).delete(`/api/menu/sauce/${postId}`);
    })

    // test DELETE request to delete sauce
    test('DELETE /api/menu/sauce/:id', async () => {
        const addItem = await request(app).post('/api/menu/sauce').send(sauceData);
        const postId = addItem.body.id;
        const res = await request(app).delete(`/api/menu/sauce/${postId}`);
        expect(res.statusCode).toBe(200);
        const getItems = await request(app).get('/api/menu/sauce');
        expect(res.body[postId]).toBe(undefined);
        const res2 = await request(app).delete(`/api/menu/sauce/${postId}`);
        expect(res2.statusCode).toBe(404);
        expect(res2.body.message).toBe('No sauce found with that id!');
    })
});

// test route for side categories db
describe('Side Categories Routes', function() {
    const sidesCategoryData = {
        title: "Nachos"
    }

    // test GET request for all Side Category
    test('responds to /api/menu/sidesCategory', async () => {
        const res = await request(app).get('/api/menu/sidesCategory');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body[1].title).toBe('Fat Fries');
        expect(res.body[1].sides[0].title).toBe('Mexi Cali');
    });

    // test GET request for one Side Category
    test('GET /api/menu/sidesCategory/:id', async () => {
        const idCheck = 1;
        const res = await request(app).get(`/api/menu/sidesCategory/${idCheck}`);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe('Dips');
        expect(res.body.sides[3].title).toBe('Fat Sauce');
    })

    // test POST request to create a Side Category
    test('POST /api/menu/sidesCategory', async () => {
        const res = await request(app).post('/api/menu/sidesCategory').send(sidesCategoryData);
        const postId = res.body.id;
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe('Nachos');
        await request(app).delete(`/api/menu/sidesCategory/${postId}`);
    })

    // test PUT request to update a Side Category
    test('PUT /api/menu/sidesCategory/:id', async () => {
        const addItem = await request(app).post('/api/menu/sidesCategory').send(sidesCategoryData);
        const postId = addItem.body.id;
        const res = await request(app).put(`/api/menu/sidesCategory/${postId}`).send({
            title: 'Nachos and guacamole'
        });
        const getItem = await request(app).get(`/api/menu/sidesCategory/${postId}`);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(getItem.body.title).toBe('Nachos and guacamole');
        await request(app).delete(`/api/menu/sidesCategory/${postId}`);
    })

    // test DELETE request to delete a Side Category
    test('DELETE /api/menu/sidesCategory/:id', async () => {
        const addItem = await request(app).post('/api/menu/sidesCategory').send(sidesCategoryData);
        const postId = addItem.body.id;
        const res = await request(app).delete(`/api/menu/sidesCategory/${postId}`);
        expect(res.statusCode).toBe(200);
        const getItems = await request(app).get('/api/menu/sidesCategory');
        expect(res.body[postId]).toBe(undefined);
        const res2 = await request(app).delete(`/api/menu/sidesCategory/${postId}`);
        expect(res2.statusCode).toBe(404);
        expect(res2.body.message).toBe('No side category found with that id!');
    })
});

// test route for side db
describe('Side Routes', function() {
    const sideData = {
        title: "Milkshake (chocolate)",
        cat_id: 6
    }

    // test GET request for all Sides
    test('responds to /api/menu/side', async () => {
        const res = await request(app).get('/api/menu/side');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body[26].title).toBe('Hot Cheeto Mac');
        expect(res.body[26].cat_id).toBe(5);
    })

    // test GET request for one Side
    test('GET /api/menu/side/:id', async () => {
        const idCheck = 8;
        const res = await request(app).get(`/api/menu/side/${idCheck}`);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe('Bleu Fries');
        expect(res.body.cat_id).toBe(2);
    })

    // test POST request to create a Side
    test('POST /api/menu/side', async () => {
        const res = await request(app).post('/api/menu/side').send(sideData);
        const postId = res.body.id;
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe('Milkshake (chocolate)');
        expect(res.body.cat_id).toBe(6);
        await request(app).delete(`/api/menu/side/${postId}`);
    })

    // test PUT request to update a Side
    test('PUT /api/menu/side/:id', async () => {
        const addItem = await request(app).post('/api/menu/side').send(sideData);
        const postId = addItem.body.id;
        const res = await request(app).put(`/api/menu/side/${postId}`).send({
            title: "Milkshake (chocolate or strawberry)",
            cat_id: 5
        });
        const getItem = await request(app).get(`/api/menu/side/${postId}`);
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
        expect(getItem.body.title).toBe('Milkshake (chocolate or strawberry)');
        expect(getItem.body.cat_id).toBe(5);
        await request(app).delete(`/api/menu/side/${postId}`);
    })

    // test DELETE request to delete a Side
    test('DELETE /api/menu/side/:id', async () => {
        const addItem = await request(app).post('/api/menu/side').send(sideData);
        const postId = addItem.body.id;
        const res = await request(app).delete(`/api/menu/side/${postId}`);
        expect(res.statusCode).toBe(200);
        expect(res.body[postId]).toBe(undefined);
        const res2 = await request(app).delete(`/api/menu/side/${postId}`);
        expect(res2.statusCode).toBe(404);
        expect(res2.body.message).toBe('No side found with that id!');
    })
})

