var mongoose = require('mongoose');

//Creating a Scheama for Report
var reportSchema = mongoose.Schema({
        date: {type: Date},
        product: [
            {
                name: {type:String, required:'{PATH} is required'},
                description: {type:String},
                //changed tag to size
                size: {type:String},
                category:{type:String},
                isVintage: {type:Boolean},
                isAccessory: {type:Boolean},
                costprice: {type:String},
                retailprice: {type:String},
                //Add image
                image: {type:String},
                quantity: {
                    store: {type:Number, min: 0, required:'{PATH} is required'},
                    warehouse: {type:Number, min: 0, required:'{PATH} is required'}
                }
            },
            {
                timestamps: true
            }

        ]
    },
    {
        timestamps: true
    });

//Create a model based on the above Schema

var Report = mongoose.model('Report', reportSchema);

