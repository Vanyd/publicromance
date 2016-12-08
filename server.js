//importing different modules
var express = require('express'),
    stylus = require('stylus'),
    logger = require('morgan'),
    bodyParser = require('body-parser');

//environment variable, to determine if you are in production or development. Setting development as the default if it hasnt been already set
var env = process.env.NODE_ENV = process.env.NODE_ENV || 'development';

//Creating express application
var app = express();

//middleware configuration for stylus

//compile function that gets used by the middleware
function compile(str, path){
    return stylus(str).set('filename',path);
}

//configure the view engine. Setting the view property where I am holding my views. And informing express that we are using JAde
app.set('views', __dirname + '/server/views');
app.set('view engine', 'jade');

//Adding bodyParser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//Add Express logging
app.use(logger('dev'));

//configuring stylus middleware
app.use(stylus.middleware(
    {
        src: __dirname + '/public',
        compile: compile
    }
));

//set up static routing to the public directory. This tells Express that any time any requests come in that match up to a file inside of the public directory
app.use(express.static(__dirname + '/public'));

//Create route for our application

//Telling the server to handle all requests with a callback to render the index page.
app.get('*', function(req, res){
    res.render('index');
});


//Seting up our server to listen on a particualr port.
var port = 3030;
app.listen(port);
console.log('listening on port ' + port + '....');