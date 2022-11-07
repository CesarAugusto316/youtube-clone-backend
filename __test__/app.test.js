// const request = require('supertest');
// const { app } = require('../src/app');


describe('Test the root path', () => {
  // it('should response the GET method', async () => {
  //   const response = await request(app).get('/api/v1/users/');

  //   // console.log(response.body);
  //   expect(response.statusCode).toBe(200);
  // });

  it('should be true', () => {
    expect(true).toBeTruthy();
  });

  // todo: mock mongoDB
  // it('should return 500 if a user exist already', async () => {
  //   const response = await request(app).post('/api/v1/auth/signup')
  //     .set('Accept', 'application/json')
  //     .send({
  //       'name': 'test-6',
  //       'email': 'test-6-@gmail.com',
  //       'password': 'cesar123456'
  //     });

  //   expect(response.statusCode).toBe(201);
  // });
});
