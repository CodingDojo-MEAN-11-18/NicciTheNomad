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
  const getBreeds = async () => {
    try {
      return await axios.get('https://dog.ceo/api/breeds/list/all');
    } catch (error) {
      console.error(error);
    }
  };

  const countBreeds = async () => {
    const breeds = await getBreeds();

    if (breeds.data.message) {
      console.log(`Got ${Object.entries(breeds.data.message).length} breeds`);
    }
  };

  countBreeds();
});

app.listen(8123, function() {
  console.log('on port 8123');
});
