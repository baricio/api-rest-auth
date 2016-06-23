var Site = require('../model/site.js');

// Create endpoint /api/users for POSTS
exports.postSites = function(req, res) {
  // Create a new instance of the Beer model
  var site = new Site();

  // Set the beer properties that came from the POST data
  site.radio  = req.body.radio;
  site.site   = req.body.site;
  site.update = req.body.update;
  site.userId = req.user._id;

  // Save the beer and check for errors
  site.save(function(err) {
    if (err)
      res.send(err);

  	console.log(site);
    res.json({ message: 'site adicionado', data: site });
  });
};

// Create endpoint /api/beers for GET
exports.getSites = function(req, res) {
  // Use the Beer model to find all beer
  Site.find({ userId: req.user._id},function(err, sites) {
    if (err)
      res.send(err);

    res.json(sites);
  });

};

// Create endpoint /api/beers for GET
exports.getSite = function(req, res) {
  // Use the Beer model to find a specific beer
  Site.find({ userId: req.user._id, _id:req.params.site_id}, function(err, site) {
    if (err)
      res.send(err);

    res.json(site);
  });
};

// Create endpoint /api/beers/:beer_id for PUT
exports.putSite = function(req, res) {
  // Use the Beer model to find a specific beer
  Site.findById({ userId: req.user._id, _id:req.params.site_id}, function(err, site) {
    if (err)
      res.send(err);

    // Update the existing beer quantity
    site.update = req.body.update;

    // Save the beer and check for errors
    site.save(function(err) {
      if (err)
        res.send(err);

      res.json(site);
    });
  });
};

// Create endpoint /api/beers/:beer_id for DELETE
exports.deleteSite = function(req, res) {
  // Use the Beer model to find a specific beer and remove it
  Site.findByIdAndRemove(req.params.site_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'site removido' });
  });
};