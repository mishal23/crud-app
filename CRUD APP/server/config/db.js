/**
 * Created by mishal23 on 10/7/17.
 */
var mongoose = require('mongoose');
var connection = mongoose.connect('mongodb://localhost/mean_db');

// exports the code from the connection thing so module.exports is needed
module.exports = connection;