const routes = require('../controller')
const request = require('supertest');
const express = require('express');

const app = new express();
app.use(routes);

describe('Sauce Routes', function() {
    test('responds to /api/menu/sauce', async () => {
        const res = await request(app).get('/api/menu/sauce');
        expect(res.header['content-type']).toBe('application/json; charset=utf-8');
        expect(res.statusCode).toBe(200);
    });
});
