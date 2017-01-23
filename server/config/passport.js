var mongoose = require('mongoose'),
    passport = require('passport'),
    LocalStrategy = require('passport-local').Strategy,
    User = mongoose.model('User');


module.exports = function() {
    //grabbing the User model so passport can auth
    //Using local-passport rules to auth with User DB username and password.
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
};