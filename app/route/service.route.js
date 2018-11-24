module.exports = function(app) {
 
    const services = require('../controller/service.controller');
 
    // Create a new Customer
    app.post('/api/services', services.create);
 
    // Retrieve all Customer
    app.get('/api/services', services.findAll);
 
 
}