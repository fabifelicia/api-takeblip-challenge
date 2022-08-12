const request = require('supertest')

const api = require('../src/server')


describe('api home route', () => {
  it('GET /api - success', async () => {
    const response = await request(api).get('/')
    
    expect(response.statusCode).toBe(200)  
    expect(response.body).toHaveProperty('message')  
  })
})