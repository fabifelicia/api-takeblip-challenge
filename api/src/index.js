require('dotenv').config()
const api = require('./server')

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'

api.listen(port, () => {
    console.log(`Server running at http://${host}:${port}/`)
})