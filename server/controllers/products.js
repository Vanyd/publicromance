//Controller fo Products

var Product = require('mongoose').model('Product');


//getProduct to return entire collection
exports.getProducts = function(req, res){
    Product.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};