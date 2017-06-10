/*
 Contains informationof the Product Schema

 */
var mongoose = require('mongoose');

//Creating a Scheama for Product
var categorySchema = mongoose.Schema({
    name: {type:String, required:'{PATH} is required'}
});

//Create a model based on the above Schema

var Category = mongoose.model('Category', categorySchema);

//create default Prodcuts in the DB if there is no records

function createDefaultCategories() {
    Category.find({}).exec(function (err, collection) {
        if(collection.length === 0){
            Category.create({name: "Army shirts"}),
            Category.create({name: "Check shirts"}),
            Category.create({name: "Aztec shirts"}),
            Category.create({name: "Denim shirts"}),
            Category.create({name: "Baja"})
            }
    })
}

//exports default products function so app can run when it starts
exports.createDefaultCategories = createDefaultCategories;