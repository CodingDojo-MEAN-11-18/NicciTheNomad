var express = require("express");
const fileUpload = require("express-fileupload");
var app = express();
app.use(express.static(__dirname + "/static"));
// app.use('/static', express.static(__dirname + '/images'));
app.use(fileUpload());
app.set("views", __dirname + "/views");
app.set("view engine", "ejs");

app.get("/", function(req, res) {
  res.render("index", { title: "my express project" });
});

app.get("/ash.html", function(error, content) {
  fs.readFile("./ash2.jpg", function(error, contect) {
    if (error) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    }
  });
});

app.get("/nicci.html", function(error, content) {
  fs.readFile("./nic.jpg", function(error, contect) {
    if (error) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    }
  });
});

app.get("/yoga_kids.html", function(error, content) {
  fs.readFile("./yoga_kids.jpg", function(error, contect) {
    if (error) {
      res.writeHead(500);
      res.end();
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(content, "utf-8");
    }
  });
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(8000, function() {
  console.log("listening on port 8000");
});
