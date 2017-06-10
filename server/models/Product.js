/*
Contains informationof the Product Schema

 */
var mongoose = require('mongoose');

//Creating a Scheama for Product
var productSchema = mongoose.Schema({
    name: {type:String, required:'{PATH} is required'},
    description: {type:String},
    //changed tag to size
    size: {type:String},
    //Add category
    category:{type:String},
    isVintage: {type:Boolean},
    isAccessory: {type:Boolean},
    costprice: {type:String},
    //add retail price
    retailprice: {type:String},
    //Add image
    image: {type:String},
    //Changed quantity need to update client side
    quantity: {
        store: {type:Number, min: 0, required:'{PATH} is required'},
        warehouse: {type:Number, min: 0, required:'{PATH} is required'}
    }
},
{
    timestamps: true
});

//Create a model based on the above Schema

var Product = mongoose.model('Product', productSchema);

//create default Prodcuts in the DB if there is no records

function createDefaultProducts() {
    Product.find({}).exec(function (err, collection) {
        if(collection.length === 0){
            Product.create({name: "Black Plaid Keyhole Front Bell Sleeve Dress", category: "Dress", costprice: "5.99", retailprice: "5.99", isVintage: false, isAccessory: false, quantity: {store: 5, warehouse: 5} ,size: "S", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Black Halter One Shoulder Bodycon Dress", category: "Dress", costprice: "8.99", retailprice: "5.99", isVintage: false, isAccessory: false, quantity: {store: 5, warehouse: 5},size: "L", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Black Ripped Drawstring Sweatpants", category: "Pants", costprice: "6.99", retailprice: "5.99", isVintage: false, isAccessory: false, quantity: {store: 5, warehouse: 5},size: "L", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Black Contrast Elastic Waist Faux Leather Leggings", category: "Pants", retailprice: "5.99", costprice: "5.99", isVintage: false, isAccessory: false, quantity: {store: 5, warehouse: 5},size: "L", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Silver Elastic Fabric Chunky Heel Short Boots", category: "Shoes", costprice: "5.99", retailprice: "5.99", isVintage: false, isAccessory: false, quantity: {store: 5, warehouse: 5},size: "L", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "White V Neck Drop Shoulder Sweater", category: "Sweater", costprice: "25.99", retailprice: "5.99", isVintage: false, isAccessory: false, quantity: {store: 5, warehouse: 5},size: "L", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Pink Layered Ruffle Sleeve Pullover Sweater", category: "Sweater", costprice: "15.99", retailprice: "5.99", isVintage: true, isAccessory: false, quantity: {store: 5, warehouse: 5},size: "L", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Turtleneck Raglan Sleeve Loose Sweater", category: "Sweater", costprice: "55.99", retailprice: "5.99", isVintage: true, isAccessory: false, quantity: {store: 5, warehouse: 5},size: "L", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "White Lace Overlay Elastic Waist Skirt", category: "Skirt", costprice: "5.99", retailprice: "5.99", isVintage: false, isAccessory: false, quantity: {store: 5, warehouse: 5},size: "L", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Plaid Back Zipper Pleated Skirt", category: "Skirt", costprice: "5.99", retailprice: "5.99", isVintage: false, isAccessory: false, quantity: {store: 5, warehouse: 5},size: "L", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})
        }
    })
}

//exports default products function so app can run when it starts
exports.createDefaultProducts = createDefaultProducts;