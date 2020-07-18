// Server setup
const bodyParser = require('body-parser')
const express = require('express')
const api = require('./server/routes/api')
const app = express()
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

// Mongoose setup
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.use('/', api)

const port = 3001
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
