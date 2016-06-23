
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var passport = require('passport');
var siteController = require('./controller/site');
var userController = require('./controller/user');
var authController = require('./controller/auth');

mongoose.connect('mongodb://localhost/test');

var app = express();

// Use the body-parser package in our application
app.use(bodyParser.urlencoded({
  extended: true
}));

// Use the passport package in our application
app.use(passport.initialize());

// Create our Express router
var router = express.Router();

// Create endpoint handlers for /beers
router.route('/sites')
  .post(authController.isAuthenticated, siteController.postSites)
  .get(authController.isAuthenticated, siteController.getSites);

// Create endpoint handlers for /beers/:beer_id
router.route('/sites/:site_id')
  .get(authController.isAuthenticated, siteController.getSite)
  .put(authController.isAuthenticated, siteController.putSite)
  .delete(authController.isAuthenticated, siteController.deleteSite);

router.route('/users')
  .post(userController.postUsers)
  .get(authController.isAuthenticated, userController.getUsers);

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(3300);
console.log('server escuntando a porta 3300');