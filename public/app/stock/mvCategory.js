//Resource to get the Stock file list

angular.module('app').factory('mvCategory', function ($resource) {

    //Similar to the mvUser we use the resource to grab the stock items
    var CategoryResource = $resource('/api/category/:_id',{_id:"@id"},{
        update: {method:'PUT', isArray:false},
        remove: {method:'DELETE'}
    });

    return CategoryResource;

});