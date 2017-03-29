//Resource to get the Stock file list

angular.module('app').factory('mvReport', function ($resource) {

    //Similar to the mvUser we use the resource to grab the stock items
    var ReportResource = $resource('/api/report/:_id',{_id:"@id"},{
        update: {method:'PUT', isArray:false}
    });

    return ReportResource;

});
