const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');
const morgan = require('morgan');
// const methodOverride = require('method-override');

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

// User route
const users = require('./routes/users');

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
app.use(cors());
// app.use(function(req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
//    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//    next();
// });

// Home route
app.get('/', (req, res) => {
  res.send('Invalid endpoint');
});

app.use('/users', users);

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

//listen on port
const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server started on port '+ port);
});
