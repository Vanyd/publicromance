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

    //Assigning userdata from User Data.
    var userData = req.body;

    //change to lower case, to remove duplicate loads
    userData.username = userData.username.toLowerCase();

    //Create a salt from the password
    userData.salt = encrypt.createSalt();

    //hash the password with the salty
    userData.hashed_pwd = encrypt.hashPwd(userData.salt, userData.password);

    //create user,
    User.create(userData, function(err, user){
        if(err){
            //Check for duplicates, MongoDB error message for duplicate is E11000
            if(err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Username');
            }
            res.status(400);
            return res.send({reason:err.toString()});
        }

        //No error then log in the user.
        req.logIn(user, function(err){
            if(err) {return next(err);
            }
            res.send(user);
        })
    })
};
