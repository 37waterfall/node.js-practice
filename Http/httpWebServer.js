// https://www.tutorialkart.com/nodejs/create-http-web-server-in-node-js/

const http = require("http");

http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("Node.js says hello!");
    res.end();
  })
  .listen(9000);
