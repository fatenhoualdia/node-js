const http = require("http");

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end("<h1>Hello Node!!!!!</h1>/n");
  })
  .listen(3000);

console.log("server is running on http://127.0.0.1:3000");
