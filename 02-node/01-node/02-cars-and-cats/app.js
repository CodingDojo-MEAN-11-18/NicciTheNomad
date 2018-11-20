// get the http module:
var http = require("http"),
  fs = require("fs");
// fs module allows us to read and write content for responses!!
// var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function(request, response) {
  // see what URL the clients are requesting:
  console.log("client request URL: ", request.url);
  // this is how we do routing:
  if (request.url === "/cats") {
    fs.readFile("cat.html", "utf8", function(errors, contents) {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/stylesheets/cars_and_cats.css") {
    fs.readFile("./stylesheets/cars_and_cats.css", "utf8", function(
      errors,
      contents
    ) {
      response.writeHead(200, { "Content-type": "text/css" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/images/chewy.jpg") {
    // notice we won't include the utf8 encoding
    fs.readFile("./images/chewy.jpg", function(errors, contents) {
      response.writeHead(200, { "Content-type": "image/jpg" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/images/maddy.jpg") {
    // notice we won't include the utf8 encoding
    fs.readFile("./images/maddy.jpg", function(errors, contents) {
      response.writeHead(200, { "Content-type": "image/jpg" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/images/STC.png") {
    // notice we won't include the utf8 encoding
    fs.readFile("./images/STC.jpg", function(errors, contents) {
      response.writeHead(200, { "Content-type": "image/jpg" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/images/RSKCS.jpg") {
    // notice we won't include the utf8 encoding
    fs.readFile("./images/RSKCS.jpg", function(errors, contents) {
      response.writeHead(200, { "Content-type": "image/jpg" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/cars") {
    fs.readFile("car.html", "utf8", function(errors, contents) {
      response.writeHead(200, { "Content-type": "text/html" });
      response.write(contents);
      response.end();
    });
  } else if (request.url === "/cars/new") {
    fs.readFile("car_new.html", "utf8", function(errors, contents) {
      response.writeHead(200, { "Content-type": "text/html" });
      response.write(contents);
      response.end();
    });
  } else {
    // request didn't match anything:
    response.end("File not found!!!");
  }
});
server.listen(7077);
console.log("Running in localhost at port 7077");
