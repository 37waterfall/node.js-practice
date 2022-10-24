var fs = require("fs");



fs.rename(
  "sample.txt",
  "sample_old.txt",

  function (err) {
    if (err) throw err;

    console.log("File Renamed.");

    // 刪除。。
    fs.unlink("sample_old.txt", function (err) {
      if (err) throw err;

      console.log("File Deleted.");
    });
  }
);
