require('dotenv').config()
const axios = require('axios').default
const Router = require('express').Router()

const { apiFiltered } = require('./modules.js')
const url = process.env.URL || 'https://api.github.com/users/takenet/repos'

Router.get('/api/v1/', (req, res) => {
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


module.exports = { Router }