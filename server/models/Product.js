var mongoose = require('mongoose');

//Creating a Scheama for Product
var productSchema = mongoose.Schema({
    name: {type:String, required:'{PATH} is required'},
    description: {type:String},
    tags: [String],
    category:{type:String},
    isVintage: {type:Boolean},
    isAccessory: {type:Boolean},
    price: {type:String},
    quantity: {type:Number, min: 0, required:'{PATH} is required'}
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
            Product.create({name: "Black Plaid Keyhole Front Bell Sleeve Dress", category: "Dress", price: "5.99", isVintage: false, isAccessory: false, quantity: 7,tags: ['Plaid', 'Dress', 'Black'], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Black Halter One Shoulder Bodycon Dress", category: "Dress", price: "8.99", isVintage: false, isAccessory: false, quantity: 9,tags: ['Shoulder', 'Dress', 'Black'], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Black Ripped Drawstring Sweatpants", category: "Pants", price: "6.99", isVintage: false, isAccessory: false, quantity: 15,tags: ['Ripped', 'Pants', 'Black'], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Black Contrast Elastic Waist Faux Leather Leggings", category: "Pants", price: "5.99", isVintage: false, isAccessory: false, quantity: 7,tags: ['Elastic', 'Pants', 'Black'], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Silver Elastic Fabric Chunky Heel Short Boots", category: "Shoes", price: "5.99", isVintage: false, isAccessory: false, quantity: 5,tags: ['Elastic', 'Boots', 'Silver'], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "White V Neck Drop Shoulder Sweater", category: "Sweater", price: "25.99", isVintage: false, isAccessory: false, quantity: 11,tags: ['Shoulder', 'Sweater', 'White'], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Pink Layered Ruffle Sleeve Pullover Sweater", category: "Sweater", price: "15.99", isVintage: true, isAccessory: false, quantity: 14,tags: ['Sleeve', 'Sweater', 'Pink'], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Turtleneck Raglan Sleeve Loose Sweater", category: "Sweater", price: "55.99", isVintage: true, isAccessory: false, quantity: 21,tags: ['Sleeve', 'Sweater', 'Black'], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "White Lace Overlay Elastic Waist Skirt", category: "Skirt", price: "5.99", isVintage: false, isAccessory: false, quantity: 4,tags: ['Plaid', 'Skirt', 'White'], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}),
            Product.create({name: "Plaid Back Zipper Pleated Skirt", category: "Skirt", price: "5.99", isVintage: false, isAccessory: false, quantity: 3,tags: ['Plaid', 'Dress', 'Black'], description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})
        }
    })
}

//exports default products function so app can run when it starts
exports.createDefaultProducts = createDefaultProducts;