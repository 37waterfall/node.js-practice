const fs = require("fs");

// 01 --------------------

// fs.writeFile("newFile.txt", "Learn Node Fs module", (err) => {
//   if (err) throw err;

//   console.log("File is created successfully.");
// });

// 02 --------------------

// fs.appendFile("newfile_2.txt", "\n---------Learn Node Fs module", (err) => {
//   if (err) throw err;

//   console.log("File is created successfully.");
// });

// 03 --------------------
//  如果没有这个文件，就创建。。。
// 里面的内容呢？？？？
fs.open("newfile_3.txt", "w", function (err, file) {
  if (err) throw err;
  console.log("File is opened in write mode.");
});
