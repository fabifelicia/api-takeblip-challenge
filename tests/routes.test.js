const request = require('supertest')
const api = require('../src/routes')


describe('api-routes', () => {
  it('GET /api - success', async () => {
    const response = await request(api).get('/v1/api/')
    expect(response.body).toEqual([
      {
        name: 'takenet/blip-sdk-csharp',
        description: 'The C# SDK for the blip.ai bot platform',
        avatar: 'https://avatars.githubusercontent.com/u/4369522?v=4',
        created: '2017-06-15T12:32:37Z'
      },
      {
        name: 'takenet/blip-client-testing-csharp',
        description: 'A host to create acceptance tests for chatbots created using BLiP C# SDK (https://github.com/takenet/messaginghub-client-csharp)',
        avatar: 'https://avatars.githubusercontent.com/u/4369522?v=4',
        created: '2017-06-30T12:20:58Z'
      },
      {
        name: 'takenet/async-samples',
        description: "Samples for the Take's C# async coding training",
        avatar: 'https://avatars.githubusercontent.com/u/4369522?v=4',
        created: '2017-09-25T20:23:09Z'
      },
      {
        name: 'takenet/blip-task-utils',
        description: 'Some useful tasks for your bot',
        avatar: 'https://avatars.githubusercontent.com/u/4369522?v=4',
        created: '2017-10-05T17:54:54Z'
      },
      {
        name: 'takenet/blip-CLI',
        description: "BLiP command-line (CLI) tool, used for managing data of BLiP's bots. blip-CLI helps to make easy and quickly your development flow and the execution of some repetitive tasks.",
        avatar: 'https://avatars.githubusercontent.com/u/4369522?v=4',
        created: '2018-03-30T18:38:55Z'
      }
    ])
    expect(response.body).toHaveLength(5);
    expect(response.statusCode).toBe(200)    
  })
})