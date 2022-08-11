const { apiFiltered } = require('../src/modules')

const arrayApi = [
    {
    "id": 1,
    "full_name": "repo1",
    "description": "description repo1",
    "owner": {
      "avatar_url": "https://avatars0.githubusercontent.com/u/2934?v=4"
    },
    "created_at": "2020-01-01",
    "language": "javascript"
  },
  {
    "id": 2,
    "full_name": "repo2",
    "description": "description repo2",
    "owner": {
      "avatar_url": "https://avatars0.githubusercontent.com/u/2934?v=4"
    },
    "created_at": "2020-01-01",
    "language": "java"
  },
  {
    "id": 3,
    "full_name": "repo3",
    "description": "description repo3",
    "owner": {
      "avatar_url": "https://avatars0.githubusercontent.com/u/2934?v=4"
    },
    "created_at": "2020-01-01",
    "language": "C#"
  },
]

describe(' Array Filtered', () => {
  it('should return an array of filtered values with language C#', () => { 
     
    expect(apiFiltered(arrayApi)).toEqual(
      [
        {
          "name": "repo3",
          "description": "description repo3",
          "avatar": "https://avatars0.githubusercontent.com/u/2934?v=4",
          "created": "2020-01-01"
        }
      ]
    )
  })

  it('should return an array empty', () => {
    expect(apiFiltered(arrayApi, '.NET')).toEqual([])
  })
})