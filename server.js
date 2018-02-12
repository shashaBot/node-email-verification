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
const PaypalConfig = require('./models/paypalConfig');
const Package = require('./models/package');
const nodemailer = require('nodemailer');

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
    socket.secret = data.secret;
    console.log('scan session socket secret');
    io.emit('session-scanned', {sessionId: data.sessionId, secret: data.secret});
  })

  socket.on('stop-session', (data) => {
    console.log('stop-session');
    io.emit('session-stopped', {sessionId: data.sessionId, secret: data.secret});
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

// Packages route
const package = require('./routes/package');

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

var whitelist = ['http://localhost:4200', 'http://localhost:8080', 'http://localhost:8100', process.env.DOMAIN, 'http://teq-gallery.herokuapp.com', 'null', 'file://'];
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
app.use('/package', package);

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
      .catch((err) => res.sendStatus(err.response.statusCode).send(err.error));
});

app.post('/admin/storemailer', passport.authenticate('jwt', {session: false}), (req, res) => {
  //store credentials to db.
  let newSmtp = {
    auth: {
      user: req.body.smtpUser,
      pass: req.body.smtpPass
    },
    mailerId: req.body.smtpMailer
  }
  if(req.body.smtpService) {
    newSmtp.service = req.body.smtpService;    
  } else {
    newSmtp.host = req.body.smtpHost
    newSmtp.port = req.body.smtpPort
    newSmtp.tls = {
      rejectUnauthorized: false
    }
    if(newSmtp.port == 465) {
      newSmtp.secure = true
    }
  }

  console.log('smtp: ', newSmtp);

  let transporter = nodemailer.createTransport(newSmtp);

  transporter.verify((err, success) => {
    if(err) {
      console.log(err);
      return res.json({success: false, msg: 'Your SMTP details are not configured properly. Please check and update again!'})
    }
    let newSmtpModel = new Smtp(newSmtp);
    Smtp.updateMailer(newSmtpModel, (err) => {
      if(err) {
        console.log(err);
        return res.json({success: false, msg: 'Error in saving SMTP details!'});
      }
      res.json({success: true});
    })    
  })
});

app.get('/admin/getmailer', passport.authenticate('jwt', {session:false}), (req, res) => {
  // get mailer credentials
  Smtp.getCredentials((err, smtp) => {
    if(err) return res.json({success: false, msg: 'Server error! Couldn\'t fetch SMTP'})
    if(!smtp) return res.json({success: false, msg: 'No SMTP info found. Please provide SMTP information'});
    res.json({success: true, mailerId: smtp.mailerId, service: smtp.service, host: smtp.host, port: smtp.port, user: smtp.auth.user});
  })
})

app.post('/admin/store_paypal_config', passport.authenticate('jwt', {session: false}), (req, res) => {
  let paypalConfig = new PaypalConfig(req.body.paypalConfig);
  PaypalConfig.saveConfig(paypalConfig, (err, saved) => {
    if(err) {
      console.log(err);
      return res.json({success: false, msg: 'Error in saving paypal details'});
    }
    Package.configurePaypal(req.body.paypalConfig);
    res.json({success: true})
  });
})

app.get('/admin/get_paypal_config', passport.authenticate('jwt',{session: false}), (req, res) => {
  PaypalConfig.getConfig((err, config) => {
    if(err) return res.json({success: false, msg: 'Error in getting paypal config details!'})
    res.json({success: true, config: config})
  })
})

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

