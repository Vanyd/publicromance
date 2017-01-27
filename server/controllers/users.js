//handles all logic for routes about user

var User = require('mongoose').model('User'),
    encrypt = require('../utilities/encryption');


exports.getUsers = function (req, res) {
    //find all users
    User.find({}).exec(function (err, collection) {
        //Send back entire User collection in response
        res.send(collection);
    })
};


exports.createUser = function(req, res, next){

    //grabbing data posted to the user
    var userData = req.body;


    userData.username = userData.username.toLowerCase();
    userData.salt = encrypt.createSalt();
    userData.hashed_pwd = encrypt.hashPwd(userData.salt, userData.password);
    //create user in database through mongoose
    User.create(userData, function(err, user){
        if(err){

            //E11000 internal mongoDB error code for duplicate
            if(err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Username');
            }
            res.status(400);
            return res.send({reason:err.toString()});
        }
        req.logIn(user, function(err){
            if(err) {return next(err);
            }
            res.send(user);
        })
    })
};
