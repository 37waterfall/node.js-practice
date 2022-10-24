// https://www.tutorialkart.com/nodejs/express-js-router/

var express = require("express");

var router1 = express.Router();

// 当前路由的中间件
router1.use(function timeLog(req, res, next) {
  console.log("Requested URI Path：", req.url);
  next();
});

router1.get("/", function (req, res) {
  res.send("Birds home page");
});

router1.get("/about", function (req, res) {
  res.send("About birds");
});

module.exports = router1;
