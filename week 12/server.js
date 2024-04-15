const path = require ('path')
const express = require('express')
const bodyParser = require('body-parser')
//routing is figuring out what page a user wants
//
const indexRouter = require('./routes/Index.js')

const app =express()


app.use(bodyParser.urlencoded({extended: false}))

app.set('views',path.join(__dirname, 'views'))

app.set('view engine', 'hbs')

app.use('/', indexRouter)

let server = app.listen(3000) 