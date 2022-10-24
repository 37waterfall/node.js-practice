// https://www.tutorialkart.com/nodejs/express-js-tutorial/

var express = require('express')
 
// create express application instance
var app = express()
  
// express route
app.get('/', function (req, res) {
   res.send('This is a basic Example for Express.js by TUTORIALKART')
})
  
// start server
var server = app.listen(8000, () => {
   console.log('Listening on port 8000... ')
})