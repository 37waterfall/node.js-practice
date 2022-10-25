const fs = require("fs");

fs.readFile("sample.html", (err, data) => {
  if (err) throw err;

  console.log(data.toString("utf8"));
});
