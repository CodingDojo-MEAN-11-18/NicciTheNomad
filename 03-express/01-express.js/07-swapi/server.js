const express = require('express');
// const path = require('path');
const app = express();
const parser = require('body-parser');

const axios = require('axios');
const url = 'https://swapi.co/api';
app.use(parser.urlencoded({ extended: true }));

//Jason showed this in lecture 3/28/18 - tells file to look up a level
// app.use(express.static(path.join(__dirname, './static')));
// app.set('views', path.join(__dirname + './views'));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('index', { title: 'swapi assignment' });
});
app.get('/people', function(req, res) {
  // use the axios .get() method - provide a url and chain the .then() and .catch() methods
  axios
    .get('https://swapi.co/api/people/')
    .then(data => {
      // log the data before moving on!
      console.log('console logging data (server file)', data);
      // rather than rendering, just send back the json data!
      res.json(data);
    })
    .catch(error => {
      // log the error before moving on!
      console.log(error);
      res.json(error);
    });
});

app.get('/vehicles', function(req, res) {
  // use the axios .get() method - provide a url and chain the .then() and .catch() methods
  axios
    .get('https://swapi.co/api/vehicles/')
    .then(data => {
      // log the data before moving on!
      console.log('console logging data (server file)', data);
      // rather than rendering, just send back the json data!
      res.json(data);
    })
    .catch(error => {
      // log the error before moving on!
      console.log(error);
      res.json(error);
    });
});
app.listen(8121, function() {
  console.log('on port 8121');
});
