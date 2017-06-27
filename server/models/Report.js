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

function createDefaultReports() {
    Report.find({}).exec(function (err, collection) {
        if(collection.length === 0){
                Report.create({ date: new Date("2017-01-16"), product: [
                    {name: "Item 1", quantity : { store: 5, warehouse: 3} },
                    {name: "Item 2", quantity : { store: 3, warehouse: 2} },
                    {name: "Item 3", quantity : { store: 3, warehouse: 1} },
                    {name: "Item 4", quantity : { store: 7, warehouse: 0} }
                    ]}),
                Report.create({ date: new Date("2017-01-17"), product: [
                    {name: "Item 1", quantity : { store: 4, warehouse: 3} },
                    {name: "Item 2", quantity : { store: 3, warehouse: 2} },
                    {name: "Item 3", quantity : { store: 4, warehouse: 0} },
                    {name: "Item 4", quantity : { store: 5, warehouse: 0} }
                    ]}),
                Report.create({ date: new Date("2017-01-18"), product: [
                    {name: "Item 1", quantity : { store: 2, warehouse: 3} },
                    {name: "Item 2", quantity : { store: 2, warehouse: 2} },
                    {name: "Item 3", quantity : { store: 3, warehouse: 0} },
                    {name: "Item 4", quantity : { store: 2, warehouse: 0} }
                    ]}),
                Report.create({ date: new Date("2017-01-19"), product: [
                    {name: "Item 1", quantity : { store: 5, warehouse: 0} },
                    {name: "Item 2", quantity : { store: 4, warehouse: 0} },
                    {name: "Item 3", quantity : { store: 3, warehouse: 0} },
                    {name: "Item 4", quantity : { store: 1, warehouse: 0} }
                    ]}),
                Report.create({ date: new Date("2017-01-20"), product: [
                    {name: "Item 1", quantity : { store: 3, warehouse: 6} },
                    {name: "Item 2", quantity : { store: 3, warehouse: 4} },
                    {name: "Item 3", quantity : { store: 2, warehouse: 7} },
                    {name: "Item 4", quantity : { store: 1, warehouse: 5} }
                    ]}),
                Report.create({ date: new Date("2017-01-21"), product: [
                    {name: "Item 1", quantity : { store: 6, warehouse: 3} },
                    {name: "Item 2", quantity : { store: 7, warehouse: 0} },
                    {name: "Item 3", quantity : { store: 9, warehouse: 0} },
                    {name: "Item 4", quantity : { store: 6, warehouse: 0} }
                    ]})
        }
    })
}

//exports default products function so app can run when it starts
exports.createDefaultReports = createDefaultReports;