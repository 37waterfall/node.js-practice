var fs = require("fs");

// 01 --------------------
// fs.rename("sample.txt", "sample_old.txt", function (err) {
//   if (err) throw err;
//   console.log("File Renamed.");
// });

// 02 --------------------

var fs = require("fs");

fs.renameSync("sample_old.txt", "sample.txt");
console.log("File Renamed.");
