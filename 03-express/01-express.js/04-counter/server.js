const express = require('express');
const session = require('express-session');
const app = express();
const sess = {
  secret: '123abc',
  cookie: {},
};
app.use(express.static(__dirname + '/static'));
//Use the session middleware
app.use(session(sess));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
// let count = 0;

//access session as request.session
app.get('/', function(request, response) {
  if (request.session.count === undefined) {
    request.session.count = 1;
    console.log(request.session.count);
  } else {
    request.session.count++;
  }
  const count = request.session.count;
  response.render('index', { count: count });
});

// app.post('/', function(request, response){
//     request.session.name = request.body.name;
//     console.log('Request: ' + request.session.name);
//     response.redirect('/');
// });

const parser = require('body-parser');
app.use(parser.urlencoded({ extended: true }));

app.listen(7800, function() {
  console.log('listening on port 7800');
});
