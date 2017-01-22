var mongoose = require('mongoose');

module.exports = function(config) {

    mongoose.connect(config.db);

    //when connected make db = the connection
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'ERROR: Could not connect to Database'));
    db.once('open', function callback() {
        console.log('Connected to ' + config.name + ' Database')
    });

};