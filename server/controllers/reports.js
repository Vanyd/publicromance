var Report = require('mongoose').model('Report');


//getProduct to return entire collection
exports.getReports = function (req, res) {
    Report.find({}).exec(function (err, collection) {
        res.send(collection);
    })
};
