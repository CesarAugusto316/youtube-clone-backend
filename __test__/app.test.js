const request = require('supertest');
const { app } = require('../app.js');


describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/v1/users/');
    expect(response.statusCode).toBe(200);
  });
});
