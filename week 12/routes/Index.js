//create  a function to create a webpage in response to different urls
//each url will have it's own funtion that creates a webpage that's sent to a browser
const express = require('express')
const router = express.Router()

router.get('/', function(req, res){
console.log(req.query)
    const height = req.query.height
    res.render('index.hbs')
})

module.exports = router