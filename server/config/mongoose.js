var mongoose = require('mongoose'),
    crypto = require('crypto');

module.exports = function(config) {

    mongoose.connect(config.db);

    //when connected make db = the connection
    var db = mongoose.connection;
    db.on('error', console.error.bind(console, 'ERROR: Could not connect to Database'));
    db.once('open', function callback() {
        console.log('Connected to ' + config.name + ' Database')
    });

    //Schema for the user
    var userSchema = mongoose.Schema({
        firstName: String,
        lastName: String,
        username: String,
        salt: String,
        hashed_pwd: String,
        roles: [String]
    });

    //create authenticate method which checks if password is correct
    userSchema.methods ={
        authenticate: function (passwordToMatch) {
            return hashPwd(this.salt, passwordToMatch) === this.hashed_pwd;
        }
    };

    var User = mongoose.model('User', userSchema);

    User.find({}).exec(function(err, collection){
    if(collection.length === 0) {
        var salt, hash;
        salt = createSalt();
        hash = hashPwd(salt, 'test');
        User.create({firstName: 'test', lastName: 'test', username: 'test', salt: salt, hashed_pwd: hash, roles: ['admin']})
    }
    })
};

//Creating Salt function to hash the password
function createSalt(){
    //return random 128 byte and put it in a base64
    return crypto.randomBytes(128).toString('base64')
}

function hashPwd(salt, pwd){
    //create hash message authentication code. Using the Sha1 alg
    var hmac = crypto.createHmac('sha1', salt);
    //return hex based representation of the result of hasing the poassword with the salt using the SHA1 algrythiom.
    hmac.setEncoding('hex');
    hmac.write(pwd);
    hmac.end();
    return hmac.read();
}