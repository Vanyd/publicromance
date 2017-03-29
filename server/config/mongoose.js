var mongoose = require('mongoose'),
    userModel = require('../models/User'),
    reportModel = require('../models/Report'),
    productModel = require('../models/Product');

module.exports = function(config) {

    mongoose.connect(config.db);

    //when connected make db = the connection
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'ERROR: Could not connect to Database'));
    db.once('open', function callback() {
        console.log('Connected to ' + config.name + ' Database')
    });

    productModel.createDefaultProducts();

    reportModel.createDefaultReport();

};

