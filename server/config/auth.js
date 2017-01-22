
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