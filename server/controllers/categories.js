//Controller fo Products

var Category = require('mongoose').model('Category');


//getProduct to return entire collection
exports.getCategories = function (req, res) {
    Category.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};

//Get Product by Id and return one
exports.getCategoryById = function (req, res) {
    Category.findOne({_id: req.params.id}).exec(function (err, category) {
        res.send(category);
    })
};

exports.createCategories = function (req, res) {

    //Assigning userdata from User Data.
    var categoryData = req.body;

    //create product,
    Category.create(categoryData, function (err) {
        if (err) {
            //Check for duplicates, MongoDB error message for duplicate is E11000
            if (err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Name');
            }
            res.status(400);
            return res.send({reason: err.toString()});
        }

    });
};