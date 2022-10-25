const fs = require("fs");

// 01 ------------------
// fs.unlink("sample.txt", function (err) {
//   if (err) throw err;

//   console.log("File deleted!");
// });

// 02 ------------------

fs.unlinkSync("sample.txt");

console.log("File deleted!");
