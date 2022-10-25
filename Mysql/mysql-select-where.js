const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "studentsDB",
});

con.connect(function (err) {
  if (err) throw err;

  // 01 --------------------------

  //   con.query(
  //     "SELECT * FROM students where marks > 90",
  //     (err, result, fields) => {
  //       if (err) throw err;

  //       console.log(result);
  //     }
  //   );

  // 02 --------------------------
  //   escape - Records may contain data with escaping values like space characters
  //   const name = "Bruce Wane";
  //   const query = "SELECT * FROM students where name=" + mysql.escape(name);
  //   con.query(query, function (err, result, fields) {
  //     if (err) throw err;
  //     console.log(result);
  //   });

  // 03----------------------
  // where 可以多个条件！

  con.query(
    "SELECT * FROM students where marks>90 && rollno<8",
    function (err, result, fields) {
      // if any error while executing above query, throw error
      if (err) throw err;
      // if there is no error, you have the result
      console.log(result);
    }
  );
});
