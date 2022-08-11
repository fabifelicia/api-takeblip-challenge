const express = require('express')
const axios = require('axios').default

const app = express()

const port = 3000
const host = 'localhost'
const url = 'https://api.github.com/users/takenet/repos'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/v1/', (req, res) => {
    axios.get(url)
        .then(response => {
          const repos = response.data
          const reposCsharp = []

          repos.filter(repo => {
              if (repo.language === 'C#') {
                reposCsharp.push({
                  name: repo.full_name,
                  description: repo.description,
                  avatar: repo.owner.avatar_url,
                  created: repo.created_at
                })
              }
            })
          reposCsharp.sort((a, b) => a.created < b.created ? -1 : a.created > b.created ? 1 : 0)
          reposCsharp.splice(5) //remove a partir dos 5 primeiros repositorios
          res.status(200).send(reposCsharp)
        })        
        .catch(err => {
            res.status(400).send(err)
        })    
})

app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}/`)
})