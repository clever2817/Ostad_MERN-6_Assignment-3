// Server Setup
var http = require("http");

var server = http.createServer(function (req, res) {
  res.end("Hello Node JS");
});

server.listen(5500);

console.log("Server is listening on port 5500...");
