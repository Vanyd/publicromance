var path = require('path');
var rootPath = path.normalize(__dirname + '/../../');

module.exports = {
    development: {
        name: 'localhost',
        db:'mongodb://admin:admin@ds143990.mlab.com:43990/seantest',
        rootPath: rootPath,
        port: process.env.PORT || 3030

    },
    production: {
        name: 'Prod',
        db:'mongodb://admin:publicromance@ds133418.mlab.com:33418/publicromance',
        rootPath:rootPath,
        port: process.env.PORT || 80

    }
};
