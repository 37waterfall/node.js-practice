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
  //     "UPDATE students SET marks=84 WHERE marks = 74",
  //     (err, result, fields) => {
  //       if (err) throw err;

  //       console.log(result);
  //     }
  //   );

  // 02 --------------
  // change all marks!
  con.query("UPDATE students SET marks=84", (err, result, fields) => {
    if (err) throw err;

    console.log(result);
  });
});

// "John"	"1"	"84"
// "Arjun"	"2"	"84"
// "Prasanth"	"3"	"84"
// "Adarsh"	"4"	"84"
// "Raja"	"5"	"84"
// "Sai"	"6"	"84"
// "Ross"	"7"	"84"
// "Monica Gellar"	"8"	"84"
// "Lee"	"9"	"84"
// "Bruce Wane"	"10"	"84"
// "Sukumar"	"11"	"84"
// "Anisha"	"12"	"84"
// "Miley"	"13"	"84"
// "Jobin"	"14"	"84"
// "Amy"	"15"	"84"
// "Miley"	"13"	"84"
// "Jobin"	"14"	"84"
// "Amy"	"15"	"84"
