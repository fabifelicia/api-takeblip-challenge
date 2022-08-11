const supertest = require('supertest')
const express = require('express') 
const { Router } = require('../src/routes')

const api = express()
api.use(Router)

describe('api-routes', () => {
  it('GET /api - success', async () => {
    const response = await supertest(api).get('/v1/api/')
    
    expect(response.statusCode).toEqual(200)    
  })
})