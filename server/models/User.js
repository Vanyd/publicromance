var mongoose = require('mongoose'),
    encreypt = require('../utilities/encryption');


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

//create authenticate method which checks if password is correct
userSchema.methods ={
    authenticate: function (passwordToMatch) {
        return encrypt.hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
    }
};

 var User = mongoose.model('User', userSchema);
