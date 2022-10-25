const fs = require("fs-extra");

const source = "folderA";
const destination = "folderB";

fs.copy(source, destination, (err) => {
  if (err) {
    console.log("An erro occured while coping the folder.");
    return console.error(err);
  }

  console.log("Copy completed!");
});
