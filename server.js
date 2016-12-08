//importing different modules
var express = require('express');

//environment variable, to determine if you are in production or development. Setting development as the default if it hasnt been already set
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Creating express application
var app = express();

//configure the view engine. Setting the view property where I am holding my views. And informing express that we are using JAde
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

//Create route for our application

//Telling the server to handle all requests with a callback to render the index page.
app.get('*', function(req, res){
    res.render('index');
});


//Seting up our server to listen on a particualr port.
var port = 3030;
app.listen(port);
console.log('listening on port ' + port + '....')