const db = require('../config/db.config.js');
const Service = db.services;

// Post a Service
exports.create = (req, res) => {	
	// Save to MySQL database
	Service.create({  
	  description: req.body.description,
	  
	}).then(service => {		
		// Send created customer to client
		res.send(service);
	});
};
 
// FETCH all Services
exports.findAll = (req, res) => {
	Service.findAll().then(services => {
	  // Send all customers to Client
	  res.send(services);
	});
};
