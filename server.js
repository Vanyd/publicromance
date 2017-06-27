/*
Author: Colum Coughlan
Description:
Date:
 */


//importing different modules to allow the server to run
var express = require('express');

//environment variable, to determine if you are in production or development. Server Enviorment needs to be set
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Creating express application
var app = express();

var config = require('./server/config/config')[env];

//calls express and passes app and config in
require('./server/config/express')(app, config);

//Mongoose
require('./server/config/mongoose')(config);

//Passport
require('./server/config/passport')();

//Routing
require('./server/config/routes')(app);


var schedule = require('node-schedule');



var productBackup = schedule.scheduleJob('01 01 * * *', function(){

    //TODO Add product backup for reports
    // Create new document in Reports collection
    // Push current productss into new document

    // Report.create({ date: new Date("2017-01-16"), product: [Product]});
    //
    //
    // // Loop through all Product documents pushing into a new array under report.product[]
    //
    //
    //
    //
    // console.log("Daily Report Updated");


});



//Seting up our server to listen on a particualr port.
app.listen(config.port);
console.log('listening on port ' + config.port + '....');