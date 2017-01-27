//Hash and salt password

var crypto = require('crypto');

//Creating Salt function to hash the password
exports.createSalt = function createSalt(){
    //return random 128 byte and put it in a base64
    return crypto.randomBytes(128).toString('base64')
};

exports.hashPwd = function hashPwd(salt, pwd){
    //create hash message authentication code. Using the Sha1 algorithm
    var hmac = crypto.createHmac('sha1', salt);
    //return hex based representation of the result of hasing the poassword with the salt using the SHA1 algrythiom.
    hmac.setEncoding('hex');
    hmac.write(pwd);
    hmac.end();
    return hmac.read();
};