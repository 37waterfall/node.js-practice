var express = require("express");
var app = express();

// express route with multiple functions
// app.get(
//   "/hello/",
//   function (req, res, next) {
//     res.write("Hello page. ");
//     next();
//   },
//   function (req, res, next) {
//     res.write("Hello again. ");
//     res.end();
//   }
// );

function hello(req, res, next) {
  res.write("Hello page. ");
  next();
}

function helloagain(req, res, next) {
  res.write("Hello again02. ");
  res.end();
}

// express route with multiple functions
app.get("/hello/", hello, helloagain);

// start the server
var server = app.listen(8000, function () {
  console.log("Listening on port 8000...");
});
