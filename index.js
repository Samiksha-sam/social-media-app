const express = require('express')
const bodyParser = require('body-parser')
const ejs = require('ejs')

const app = express()

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

app.set('view engine', ejs)
app.set('views', __dirname + '/src/views')

app.get('/',(req,res) => {
    res.json({
        message: 'Server is up'
    })
})

app.listen(3000,() => {
    console.log('Server is up :)')
})