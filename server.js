// Server Setup
var http = require("http");
var fs = require("fs");

var server = http.createServer(function (req, res) {
  // Route Handling
  if (req.url == "/") {
    res.end("This is the Home Page");
  } else if (req.url == "/about") {
    res.end("This is the About Page");
  } else if (req.url == "/contact") {
    res.end("This is the Contact Page");
  }

  //File Operation

  if (req.url == "/file-write") {
    fs.writeFile("demo.txt", "hello world", function (error) {
      if (error) {
        res.end("File Write Failed!");
      } else {
        res.end("File Write Successful!");
      }
    });
  }
});

server.listen(5500);

console.log("Server is listening on port 5500...");
