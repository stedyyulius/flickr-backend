import request from 'supertest';

import app from '../../app'

beforeAll(done => {
    done()
})

afterAll(done => {
    app.close()
    done()
})

describe('Testing Get Feed', () => {
    
    it('respond with valid HTTP status code', async () => {

        const response = await request(app).get('/api/feed').send();

        expect(response.status).toBe(200);

    });

    it('respond with a json object', async () => {

        const response = await request(app).get('/api/feed').send();
  
        expect(response.body).toBeInstanceOf(Object);

    });

});