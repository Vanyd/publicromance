//rotueparams required to get the ID for the Product from the URL
angular.module('app').controller('mvStockDetailsCtrl', function ($scope, mvProduct, $routeParams) {

    //Calling get on the Resoruce and passing in and id which is received by the routeParams
    //routeparams id is taken from app.js rooute
    //resoruce is taken id from mvProduct
    $scope.product = mvProduct.get({_id:$routeParams.id})
})