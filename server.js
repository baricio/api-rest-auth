var express = require('express');
var app = express();
var port = process.env.PORT || 3300;
var router = express.Router();

// Initial dummy route for testing
// http://localhost:3300/api
router.get('/', function(req, res) {
  res.json({ message: 'usuario verificado' });
});

// Register all our routes with /api
app.use('/api', router);

// Start the server
app.listen(port);
console.log('server escuntando a porta ' + port);