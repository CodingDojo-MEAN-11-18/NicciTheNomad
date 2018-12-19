const express = require('express');
const session = require('express-session');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 7800;
const app = express();

const this_sess = {
  secret: '123abc',
  resave: false,
  saveUninitialized: true,
  name: 'session',
  cookie: { maxAge: 60000 },
};
app.use(express.static(path.resolve('static')));
app.use(parser.urlencoded({ extended: true }));
//Use the session middleware
app.use(session(this_sess));
app.set('views', path.resolve('views'));
app.set('view engine', 'ejs');

//access session as request.session
app.get('/', function(req, res) {
  // if (request.session.count === undefined) {
  //   request.session.count = 1;
  //   console.log(request.session.count);
  // } else {
  //   request.session.count++;
  // }
  // const count = request.session.count;
  const name = 'Ashton';
  const count = 17;
  // console.log('current count is: ');
  res.render('index', { name: name, count: count });
});

app.get('/ash', function(req, res) {
  var details = [
    { name: 'Ashton' },
    { food: 'Apples' },
    { age: '9 years' },
    { sleep: 'for 9 hours and gets up early' },
  ];
  const name = 'Ashton';
  const count = 17;
  res.render('ash', { name: name, count: count, details: details });
});

app.get('/check_count', function(req, res) {
  const name = 'Ashton';
  const count = 17;
  res.render('check_count', { count: count, name: name });
});
app.listen(port, () => console.log(`listening on port ${port}`));
