var mongoose = require('mongoose');

// Define our beer schema
var SiteSchema   = new mongoose.Schema({
  radio: String,
  site: String,
  update: Number,
  userId: String
});

// Export the Mongoose model
module.exports = mongoose.model('Site', SiteSchema);