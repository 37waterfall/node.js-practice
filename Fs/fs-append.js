const fs = require("fs");

var data = "\nLearn Node.js with the help of well built Node.js Tutorial.";

// 01 -------------------
// fs.appendFile("sample.txt", data, "utf-8", (err) => {
//   if (err) throw err;

//   console.log("Data is appended to file successfully.");
// });

// 02 -------------------

// append data to file
fs.appendFileSync("sample.txt", data, "utf8");
console.log("Data is appended to file successfully.");
