// https://www.tutorialkart.com/nodejs/express-js-routes/

var express = require("express");

var app = express();

app.get("/", (req, res) => {
  res.send("Home");
});

app.get("/hello/", (req, res) => {
  res.send("Hello page");
});

app.get("/bye/", (req, res) => {
  res.send("Bye page");
});

var server = app.listen(8000, () => {
  console.log("Listening on port 8000...");
});
