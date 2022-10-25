const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "studentsDB",
});

con.connect((err) => {
  if (err) throw err;

  // 01 ---------

  //   con.query("SELECT * FROM students ORDER BY marks", (err, result, fields) => {
  //     if (err) throw err;

  //     console.log(result);
  //   });

  // 02 ---------
  //   con.query("SELECT * FROM students ORDER BY name", (err, result, fields) => {
  //     if (err) throw err;

  //     console.log(result);
  //   });

  // 03 ---------
  //  降序！
  con.query(
    "SELECT * FROM students ORDER BY name DESC",
    (err, result, fields) => {
      if (err) throw err;

      console.log(result);
    }
  );
});
