require('dotenv').config();
module.exports = {
  // database: 'mongodb://shashwat:shashwat@ds119675.mlab.com:19675/ionic-node-auth',
  database: process.env.MONGODB,
  secret: process.env.DB_SECRET
};
