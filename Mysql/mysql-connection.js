// https://www.tutorialkart.com/nodejs/nodejs-mysql/

var mysql = require("mysql");

var con = mysql.createConnection({
  host: "localhost", // ip address of server running mysql
  user: "root", // user name to your mysql database
  password: "123456", // corresponding password
  database: "studentsDB", // use this database to querying context
});

// 01 -----------------------

// con.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// 这里的使用的 mysql 版本是5.7.20，结合Navicat for MySQL
// con.query("SELECT * FROM studentsDB.students", function (err, result, fields) {
//   // if any error while executing above query, throw error
//   if (err) throw err;
//   // if there is no error, you have the result
//   console.log(result);
// });

// 02 -----------------------

// con.connect(function (err) {
//   if (err) throw err;

//   con.query("SELECT name, marks FROM students", function (err, result, fields) {
//     if (err) throw err;
//     console.log(result);
//   });
// });

// 03 -----------------------

// Fields contain information about columns of table. Each field contains all information about a column.
// 这个fields包含的是列的信息

con.connect(function (err) {
  if (err) throw err;

  con.query("SELECT * FROM students", function (err, result, fields) {
    if (err) throw err;

    // Object.keys(result).forEach(function (key) {
    //   const row = result[key];
    //   console.log(row.name);
    // });

    // 04 -----------------------
    Object.keys(fields).forEach(function (key) {
      var field = fields[key];
      console.log(field);
    });
  });
});

// 连接成功！
// [
//   RowDataPacket { name: 'John', rollno: 1, marks: 74 },
//   RowDataPacket { name: 'Arjun', rollno: 2, marks: 74 },
//   RowDataPacket { name: 'Prasanth', rollno: 3, marks: 77 },
//   RowDataPacket { name: 'Adarsh', rollno: 4, marks: 78 },
//   RowDataPacket { name: 'Raja', rollno: 5, marks: 94 },
//   RowDataPacket { name: 'Sai', rollno: 6, marks: 84 },
//   RowDataPacket { name: 'Ross', rollno: 7, marks: 54 },
//   RowDataPacket { name: 'Monica', rollno: 8, marks: 86 },
//   RowDataPacket { name: 'Lee', rollno: 9, marks: 98 },
//   RowDataPacket { name: 'Bruce', rollno: 10, marks: 92 },
//   RowDataPacket { name: 'Sukumar', rollno: 11, marks: 99 }
// ]
