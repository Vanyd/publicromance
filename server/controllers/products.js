//Controller fo Products

var Product = require('mongoose').model('Product');


//getProduct to return entire collection
exports.getProducts = function(req, res){
    Product.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};

//Get Product by Id and return one
exports.getProductById = function (req, res){
    Product.findOne({_id:req.params.id}).exec(function (err, product) {
        res.send(product);
    })
};