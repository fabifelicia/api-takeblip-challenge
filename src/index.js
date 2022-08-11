require('dotenv').config()
const app = require('./server')

const port = process.env.PORT || 3000
const host = process.env.HOST || 'localhost'


app.listen(port, () => {
    console.log(`Server running at http://${host}:${port}/`)
})