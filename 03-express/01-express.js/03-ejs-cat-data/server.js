var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/static'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('index', { title: 'cats of Costa Rica photos' });
});

app.get('/cats', function(req, res) {
  res.render('cats');
});

app.get('/jaguarundi', function(req, res) {
  var details = [
    { image: '<img src="jaguarundi.jpg" alt="Jaguarundi Photo">' },
    { name: 'Jaguarundi' },
    { food: 'fish, small mammals, birds' },
    { life_span: '10 years' },
    { sleep: 'in trees, during the day' },
  ];
  res.render('details', { details: details });
});

app.get('/margay', function(req, res) {
  var details = [
    { image: '<img src="margay.jpg" alt="Jaguarundi Photo">' },
    { name: 'Margay' },
    { food: 'climbing rats, squirrels, opossums, small monkeys, and sloths' },
    { life_span: '9 years' },
    { sleep: 'in trees and make nests in hollow' },
  ];
  res.render('details', { details: details });
});

app.listen(7500, function() {
  console.log('listening on port 7500');
});
