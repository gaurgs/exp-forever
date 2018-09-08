
const express = require('express')
const config = require('./config/development')
const app = express()

const port = config.port

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log('App Running on port ' + port)
})



