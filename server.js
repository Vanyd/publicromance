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

//Routing
require('./server/config/routes')(app);

//Seting up our server to listen on a particualr port.
app.listen(config.port);
console.log('listening on port ' + config.port + '....');