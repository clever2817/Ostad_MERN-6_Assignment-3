var http = require("http");

var server = http.createServer(function (req, res) {
  if (req.url == "/") {
    res.end("This is the Home Page");
  } else if (req.url == "/about") {
    res.end("This is the About Page");
  } else if (req.url == "/contact") {
    res.end("This is the Contact Page");
  }
});

server.listen(5500);

console.log("Server is listening on port 5500...");
