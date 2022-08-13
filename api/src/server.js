require('dotenv').config()
const express = require('express')

const app = express()
const { Router } = require('./routes')

app.use(express.json())
app.use(Router)


app.get('/', (req, res) => {
  res.send({ message: 'Server running' })
})

module.exports = app