// https://www.tutorialkart.com/nodejs/node-js-redirect-url/

const http = require("http");
const fs = require("fs");

// 如果是404，也这样跳转。。

http
  .createServer(function (req, res) {
    if (req.url == "/page-c.html") {
      // 301
      res.writeHead(301, {
        Location: "http://" + req.headers["host"] + "/page-b.html",
      });

      return res.end();
    } else {
      console.log(req.url);

      fs.readFile(
        `./${req.url}.txt
      `,
        function (err, data) {
          if (err) throw err;
          res.writeHead(200), res.write(data.toString("utf8"));
          return res.end();
        }
      );
    }
  })
  .listen(8085);
