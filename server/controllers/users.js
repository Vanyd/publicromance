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

//exports function so routes.js can use

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

//Update the user
exports.updateUser = function (req, res) {
  var userUpdates = req.body;

    //check if the user that is being updated is the same user that is logged in OR the login user is an admin
    //hasRole comes from User model
    if(req.user._id != userUpdates._id && !req.user.hasRole('admin')){
        //send 403 and exit
        res.status(403);
        return res.end();
    }

    //TODO add in check to see if its an admin, if admin then update user id they are editing
    //if they are current user and updating themselves
    req.user.firstName = userUpdates.firstName;
    req.user.lastName = userUpdates.lastName;
    req.user.username = userUpdates.username;
    //and if password is sent to server, we need to gerneate a new salt
    if(userUpdates.password && userUpdates.password.length > 0 ) {

        //generate a new salt and then hash the password
        req.user.salt = encrypt.createSalt();
        req.user.hashed_pwd = encrypt.hashPwd(req.user.salt, userUpdates.password)
    }

    console.log(req);

    //update to the database via save in mongoose
    req.user.save(function (err) {

        if(err) {
            //callback to check for an error
            res.status(400);
            //sending back reason of error
            return res.send({reason:err.toString()});
        }

        //send back current user, where angular will update the resource obeject
        res.send(req.user);

    });


};
