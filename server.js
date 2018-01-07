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
const Smtp = require('./models/smtp');

require('dotenv').config();

let isConnectedBefore;
// Connect  to Database
mongoose.connect(config.database, {server: {auto_reconnect: true}});

// Show connection with DB
mongoose.connection.on('connected', () => {
  isConnectedBefore = true;
  console.log('Connected to Database');
});
// Handle DB error
mongoose.connection.on('error', (err) => {
  console.log(err);
  mongoose.disconnect();
});

mongoose.connection.on('reconnected', () => {
  console.log('Reconnected!');
})

mongoose.connection.on('disconnected', () => {
  console.log('disconnected');
  if(!isConnectedBefore){
    console.log('Trying to reconnect in 3 seconds');
    setTimeout(() => {
      mongoose.connect(config.database, {server: {auto_reconnect: true}});
      mongoErr = null;
    }, 3000);
  }
})

// Socket connection

// Init express app
const app = express();

//listen on port
const port = process.env.PORT || 8080;

// Init socket server
const http = require('http').Server(app);

const server = app.listen(port, () => {
  console.log('Server started on port '+ port);
});

const io = require('socket.io').listen(server);

io.on('connection', (socket) => {
  console.log('socket connected');

  socket.on('web-disconnect', (data) => {
    io.emit('web-disconnected', {secret: data.secret})
  })

  socket.on('scan-session', (data) => {
    socket.secret = secret;
    console.log('scan session socket secret: '+ secret);
    io.emit('session-scanned', {sessionId: data.sessionId, secret: data.secret});
  })

  socket.on('stop-session', (data) => {
    console.log('stop-session');
    io.emit('session-stopped', {sessionId: data.sessionId, secret: data.secret});
    socket.secret = null;
  })

  socket.on('login-qr', (data) => {
    console.log('login-qr socket qr token: ', data.qrToken);
    io.emit('user-login', {qrToken: data.qrToken, authToken: data.authToken, userId: data.userId})
  })
})

// User route
const users = require('./routes/users');

// Session route
const session = require('./routes/session');

// Category route
const category = require('./routes/category');

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
// var corsOptions = {
//   origin: 'http://localhost:8100',
//   credentials : true
// }

var whitelist = ['http://localhost:4200', 'http://localhost:8080', 'http://localhost:8100', 'https://ionic-node-auth.herokuapp.com', 'http://ionic-node-auth.herokuapp.com', 'null', 'file://'];
var corsOptions = {
  origin: function (origin, callback) {
    if(!origin) return callback(null, true);
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
app.use('/category', category);
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

app.post('/admin/storemailer', passport.authenticate('jwt', {session: false}), (req, res) => {
  //store credentials to db.
  let newSmtp = new Smtp({
    username: req.body.smtpUser,
    password: req.body.smtpPass,
    mailerId: req.body.smtpMailer
  })
  Smtp.updateMailer(newSmtp, (err) => {
    if(err) {
      console.log(err);
      return res.json({success: false});
    }
    res.json({success: true});
  })
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

