const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const morgan = require('morgan');
// const methodOverride = require('method-override');
const rp = require('request-promise');
// const fileUpload = require('express-fileupload');
const multer = require('multer');

require('dotenv').config();

// Connect  to Database
mongoose.connect(config.database);

// Show connection with DB
mongoose.connection.on('connected', () => {
  console.log('Connected to Database');
});
// Handle DB error
mongoose.connection.on('error', (err) => {
  console.log(err);
});

// Init express app
const app = express();

// default options
// app.use(fileUpload());

//multer
// app.use(multer({
//   dest: __dirname+'/uploads/temp'
// }).any());


// User route
const users = require('./routes/users');

// Session route
const session = require('./routes/session');

// Body-parser Middleware
app.use(bodyParser.json());                                     // parse application/json
app.use(bodyParser.urlencoded({'extended':'true'}));            // parse application/x-www-form-urlencoded
app.use(bodyParser.json({ type: 'application/vnd.api+json' })); // parse application/vnd.api+json as json

// Morgan Middleware
app.use(morgan('dev'));                                         // log every request to the console

// methodOverride middleware
// app.use(methodOverride());

// Passport Middleware
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Cors Middleware
var whitelist = ['http://localhost:8100', 'http://ionic-node-auth.herokuapp.com', 'https://ionic-node-auth.herokuapp.com', 'file://*', 'file://']
var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  },
  credentials: true
}
app.use(cors(corsOptions));


// Home route
app.get('/', (req, res) => {
  res.send('Invalid endpoint');
});

app.use('/users', users);

app.use('/session', session);

app.get('/validate_captcha', (req, res) => {
  const options = {
    method: 'POST',
    uri: 'https://www.google.com/recaptcha/api/siteverify',
    qs: {
      secret: process.env.CAPTCHA_SITE_SECRET,
      response: req.query.token
    },
    json: true
  };

  rp(options)
      .then(response => res.json(response))
      .catch(() => {});
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//listen on port
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server started on port '+ port);
});
