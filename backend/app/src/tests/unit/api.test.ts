import request from 'supertest';
import express from 'express';
import http from 'http';
import router from '../../router/MatechesRouter';

const app = express();
const server = http.createServer(app); 

app.use(express.json());
app.use('/api/categories', router);

describe('API Tests', () => {
  it('should respond with a 200 status code for GET /api/categories', async () => {
    const response = await request(app).get('/api/categories');
    expect(response.statusCode).toBe(200);
  });

  it('should respond with a 404 status code for an invalid route', async () => {
    const response = await request(app).get('/api/invalid');
    expect(response.statusCode).toBe(404);
  });

});

afterAll(() => {
  server.close();
});
