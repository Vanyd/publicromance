//Resource to get the Stock file list

angular.module('app').factory('mvStock', function ($resource) {

    //Similar to the mvUser we use the resource to grab the stock items
    var StockResource = $resource('/api/stock/:_id',{_id:"@id"},{
        update: {method:'PUT', isArray:false}
    });

    return StockResource;
})