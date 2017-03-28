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

exports.createProduct = function(req, res, next){

    //Assigning userdata from User Data.
    var productData = req.body;

    //change to lower case, to remove duplicate loads
    //TODO Change this so that it stores a second value for regular name all to lower case
    productData.name = productData.name.toLowerCase();


    //create product,
    Product.create(productData, function(err, user){
        if(err){
            //Check for duplicates, MongoDB error message for duplicate is E11000
            if(err.toString().indexOf('E11000') > -1) {
                err = new Error('Duplicate Name');
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
    });
//
//
// //Update quantity by 1
//
//     exports.updateProduct = function (req, res) {
//
//         var productUpdate = req.body;
//
//
//         // req.product.quantity = productUpdate.quantity;
//         //
//         // req.product.save(function (err) {
//         //
//         //     if (err) {
//         //         //callback to check for an error
//         //         res.status(400);
//         //         //sending back reason of error
//         //         return res.send({reason: err.toString()});
//         //     }
//         //
//         //     //send back current user, where angular will update the resource obeject
//
//         //
//         // });
//
//
//
//         Product.findOne({_id:productUpdate._id}).exec(function (err, product) {
//             if(err){
//                 res.status(400);
//                 return res.send({reason:err.toString()});
//             }
//             console.log(product);
//             product.quantity ++;
//             console.log(product);
//
//             Product.update({"_id":product._id},{$set: {"quantity": product.quantity}})
//         });
//
//         res.send({success:true});
//
//     };



};