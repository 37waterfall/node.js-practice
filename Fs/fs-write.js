const fs = require("fs");

const data = "Hello!";

// 01 -----------------
// fs.writeFile("sample.txt", data, (err) => {
//   if (err) throw err;

//   console.log("Data is written to file successfully.");
// });

// 02 -----------------
// 可以修改写入的格式 - ascii， utf-8
fs.writeFile("sample.txt", data, "base64", (err) => {
  if (err) throw err;

  console.log("Data is written to file successfully.");
});
