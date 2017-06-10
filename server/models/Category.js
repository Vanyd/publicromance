/*
 Contains informationof the Product Schema

 */
var mongoose = require('mongoose');

//Creating a Scheama for Product
var categorySchema = mongoose.Schema({
    name: []
});

//Create a model based on the above Schema

var Category = mongoose.model('Category', categorySchema);

//create default Prodcuts in the DB if there is no records

function createDefaultCategories() {
    Category.find({}).exec(function (err, collection) {
        if(collection.length === 0){
            Category.create({subcategory: ["Army shirts","Check shirts","Aztec shirts","Denim shirts","Baja","Knitwear"]})
            }
    })
}

//exports default products function so app can run when it starts
exports.createDefaultCategories = createDefaultCategories;