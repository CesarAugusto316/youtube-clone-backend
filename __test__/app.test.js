const request = require('supertest');
const { app } = require('../app.js');


describe('Test the root path', () => {
  test('It should response the GET method', async () => {
    const response = await request(app).get('/api/v1/users/');

    expect(response.statusCode).toBe(200);
  });

  // todo: mock mongoDB
  it('should return 500 if a user exist already', async () => {
    const response = await request(app).post('/api/v1/auth/signup')
      .set('Accept', 'application/json')
      .send({
        'name': 'test-6',
        'email': 'test-6-@gmail.com',
        'password': 'cesar123456'
      });

    expect(response.statusCode).toBe(500);
  });
});
