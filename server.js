//importing different modules
var express = require('express'),
    passport = require('passport'),
    mongoose = require('mongoose'),
    LocalStrategy = require('passport-local').Strategy;

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

//grabbing the User model so passport can auth
var User = mongoose.model('User');

passport.use(new LocalStrategy(
    function(username, password, done){
        //find username in User model from username passport and then exec function
        User.findOne({username:username}).exec(function (err, user) {
            //checks to see if user exist but is also authenticated
            //function from user schema
            if(user && user.authenticate(password)){
                return done(null, user);
            } else {
                return done(null, false);
            }

        })
    }
));


//serializeUser determines, which data of the user object should be stored in the session.
passport.serializeUser(function(user, done){
    if(user){
        done(null, user._id);
    }
});

passport.deserializeUser(function (id, done) {
    User.findOne({_id:id}).exec(function (err, user) {
        if(user){
            return done(null, user);
        } else{
            return done(null, false);
        }
    })
});

//Routing
require('./server/config/routes')(app);

//Seting up our server to listen on a particualr port.
app.listen(config.port);
console.log('listening on port ' + config.port + '....');