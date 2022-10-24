// https://www.tutorialkart.com/nodejs/express-js-middleware-example/

var express = require("express");

var app = express();

function logger(req, res, next) {
  console.log(new Date(), req.url);
  next();
}

// calls logger:middleware for each request-response cycle
// 每次发送http都会执行logger！
app.use(logger);

app.get("/", (req, res) => {
  res.send("This is a basic Example for Express.js by TUTORIALKART");
});

var server = app.listen(8000, () => {
  console.log("Listening on port 8000...");
});
