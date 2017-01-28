//User model, holds all information for the User Collection within Mongo
//Contains User schema Methods

var mongoose = require('mongoose'),
    encrypt = require('../utilities/encryption');


//Schema for the user
var userSchema = mongoose.Schema({
    firstName: {type:String, required: '{PATH} is required!'},
    lastName: {type:String, required: '{PATH} is required!'},
    username: {
        type: String,
        required: '{PATH} is required!',
        unique: true
    },
    salt: {type:String, required: '{PATH} is required!'},
    hashed_pwd: {type:String, required: '{PATH} is required!'},
    roles: [String]
});

//User schema methods
userSchema.methods ={
    //create authenticate method which checks if password is correct
    authenticate: function (passwordToMatch) {
        //comparing salt of password to match is equaled to hash
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    },
    //Check users Role
    hasRole: function (role) {
        return this.roles.indexOf(role) >-1;
    }
};

//
var User = mongoose.model('User', userSchema);
