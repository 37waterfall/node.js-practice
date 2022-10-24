// https://www.tutorialkart.com/nodejs/override-function-of-a-node-js-module/

var fs = require("fs");

delete fs["readFile"];

fs.readFile = function (str) {
  console.log("The functionality has been overriden.");
  console.log(str);
};

module.exports = fs;

fs.readFile("sample.txt");
