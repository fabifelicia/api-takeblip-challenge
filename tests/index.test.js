const api = require('../src/server')

describe('index.js - api entry', () => {
  it ('should call api.listen()', async () => {
    expect(api.listen()).toHaveBeenCalled()
  })
})

