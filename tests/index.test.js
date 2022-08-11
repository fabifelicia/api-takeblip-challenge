const apiMock = require('../src/index.js')

describe('index.js - api entry', () => {
  it ('should call api.listen()', async () => {
    expect(apiMock.listen).toHaveBeenCalled()
  })
})

