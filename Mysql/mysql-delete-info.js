const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "studentsDB",
});

con.connect((err) => {
  if (err) throw err;

  // 01 -------------

  //   con.query(
  //     "DELETE FROM students WHERE rollno > 10",
  //     function (err, result, fields) {
  //       if (err) throw err;

  //       console.log(result);
  //     }
  //   );

  // 02 -------------
  con.query("DELETE FROM students", function (err, result, fields) {
    if (err) throw err;

    console.log(result);
  });
});
