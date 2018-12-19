const express = require('express');
// const path = require('path');
const app = express();
const parser = require('body-parser');
app.use(parser.urlencoded({ extended: true }));

//Jason showed this in lecture 3/28/18 - tells file to look up a level
// app.use(express.static(path.join(__dirname, './static')));
// app.set('views', path.join(__dirname + './views'));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', { title: 'survey form' });
});

app.post('/result', function(request, response) {
  const formData = {
    name: request.body.name,
    location: request.body.location,
    language: request.body.language,
    message: request.body.message,
  };
  response.render('details', { data: formData });
});

app.listen(8750, function() {
  console.log('on port 8765');
});
