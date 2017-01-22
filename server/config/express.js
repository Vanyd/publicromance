var express = require('express'),
    logger = require('morgan'),
    bodyParser = require('body-parser'),
    stylus = require('stylus'),
    cookieParser = require('cookie-parser'),
    session = require('express-session');

//export function to be called upon. server.js throws in app and config.

module.exports = function(app, config){

    //compile function that gets used by the middleware
    function compile(str, path){
        return stylus(str).set('filename',path);
    }

    //configure the view engine. Setting the view property to config.rootPath
    app.set('views', config.rootPath + '/server/views');
    app.set('view engine', 'jade');

    app.use(cookieParser());
    app.use(session({secret: 'publicromance test', resave: false, saveUninitialized:false}));
    //Adding bodyParser
    app.use(bodyParser.urlencoded({extended: true}));
    app.use(bodyParser.json());

    //Add Express logging
    app.use(logger('dev'));

    //configuring stylus middleware
    app.use(stylus.middleware(
        {
            src: config.rootPath + '/public',
            compile: compile
        }
    ));

    //set up static routing to the config.rootPath. This tells Express that any time any requests come in that match up to a file inside of the config file
    app.use(express.static(config.rootPath + '/public'));
};