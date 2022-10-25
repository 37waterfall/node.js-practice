// https://www.tutorialkart.com/nodejs/nodejs-mysql-insert-into/

const mysql = require("mysql");

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "123456",
  database: "studentsDB",
});

con.connect((err) => {
  if (err) throw err;

  // 01 --------------

  //   con.query(
  //     'INSERT INTO students (name, rollno, marks) values ("Anisha", 12, 95)',
  //     function (err, result, fields) {
  //       if (err) throw err;

  //       console.log(result);
  //     }
  //   );

  // 02 --------------

  const records = [
    ["Miley", 13, 85],
    ["Jobin", 14, 87],
    ["Amy", 15, 74],
  ];

  con.query(
    "INSERT INTO students (name, rollno, marks) values ?",
    [records],
    (err, result, fields) => {
      if (err) throw err;

      //   console.log(result);

      // 03 -----------------------

      //   Once the INSERT INTO Query is executed, MySQL Server responds with a result object.
      //   The properties of result object like affectedRows,
      //   serverStatus, changedRows etc., could be accessed using DOT (.) operator.
      console.log(result);
      console.log("Number of rows affected : " + result.affectedRows);
      console.log(
        "Number of records affected with warning : " + result.warningCount
      );
      console.log("Message from MySQL Server : " + result.message);
    }
  );
});

// OkPacket {
//     fieldCount: 0,
//     affectedRows: 1,
//     insertId: 0,
//     serverStatus: 2,
//     warningCount: 0,
//     message: '',
//     protocol41: true,
//     changedRows: 0
//   }
