//importing different modules
var express = require('express');

//environment variable, to determine if you are in production or development. Setting development as the default if it hasnt been already set
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



var productBackup = schedule.scheduleJob('01 06 * * *', function(){

    //TODO Add product backup for reports
    // Create new document in Reports collection
    // Push current productss into new document






    console.log("This runs at 06:01");


});



//Seting up our server to listen on a particualr port.
app.listen(config.port);
console.log('listening on port ' + config.port + '....');