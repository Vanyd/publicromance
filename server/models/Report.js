var mongoose = require('mongoose');

//Creating a Scheama for Report
var reportSchema = mongoose.Schema({
        name: {type: String, required: '{PATH} is required'},
        quantity: {type: Number, min: 0, required: '{PATH} is required'}
    },
    {
        timestamps: true
    });

//Create a model based on the above Schema

var Report = mongoose.model('Report', reportSchema);

//create default Prodcuts in the DB if there is no records

function createDefaultReport() {
    Report.find({}).exec(function (err, collection) {
        if (collection.length === 0) {
            Report.create({name: "Item 1", quantity: 7}),
                Report.create({name: "Item 2", quantity: 5}),
                Report.create({name: "Item 3", quantity: 8}),
                Report.create({name: "Item 4", quantity: 9}),
                Report.create({name: "Item 5", quantity: 2}),
                Report.create({name: "Item 6", quantity: 3}),
                Report.create({name: "Item 7", quantity: 1})
        }
    })
}

//exports default products function so app can run when it starts
exports.createDefaultReport = createDefaultReport;
