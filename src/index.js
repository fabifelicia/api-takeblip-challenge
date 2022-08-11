require('dotenv').config()
const { apiFiltered } = require('./modules.js')

const express = require('express')
const axios = require('axios').default



const app = express()

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'
const url = process.env.URL || 'https://api.github.com/users/takenet/repos'

app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server running')
})

app.get('/api/v1/', (req, res) => {
    axios.get(url)
        .then(response => {
          
          const reposCsharp = apiFiltered(response.data)
          
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