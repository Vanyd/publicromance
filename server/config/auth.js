
var passport = require('passport');


exports.authenticate = function (req, res, next) {
    var auth = passport.authenticate('local', function(err, user){
        //if error send error
        if(err) {return next(err);}
        //if not user, send to client a JSON with false
        if(!user) {res.send ({success:false})}
        //login user
        req.logIn(user, function (err) {
            if(err) {return next(err);}
            //suscces JSON send true and the user
            res.send({success:true, user:user})
        })
    });
    auth(req, res, next);
};

//function to check if user is authenticated.
exports.requiresApiLogin = function (req, res, next) {
    if(!req.isAuthenticated()) {
        //if not authenticated return status 403
        res.status(403);
        res.end();
    } else{
        next();
    }
};

exports.requiresRole = function (role) {
    return function (req, res, next) {
        //check if user is not authenticated and users role
        if(!req.isAuthenticated() || req.user.roles.indexOf(role) === -1){
            res.status(403);
            res.end();
        } else {
            next();
        }
    }
}