//Resource to get the Stock file list

angular.module('app').factory('mvProduct', function ($resource) {

    //Similar to the mvUser we use the resource to grab the stock items
    var ProductResource = $resource('/api/stock/:_id',{_id:"@id"},{
        update: {method:'PUT', isArray:false}
    });

    return ProductResource;
})