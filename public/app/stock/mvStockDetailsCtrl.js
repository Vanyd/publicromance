//Controller for the Stock Details page, Should contain all information on the Product
//
//rotueparams required to get the ID for the Product from the URL
angular.module('app').controller('mvStockDetailsCtrl', function ($scope, mvProduct, $routeParams, $location, mvAuth, mvNotification) {

    //Calling get on the Resoruce and passing in and id which is received by the routeParams
    //routeparams id is taken from app.js rooute
    //resoruce is taken id from mvProduct
    $scope.product = mvProduct.get({_id:$routeParams.id});

    //Delete Product, when user clicks the Delete Item button.
    $scope.deleteProduct = function () {

        //Confirm box to make sure user wants to delete item
        if (confirm("Are you sure you want to delete " + $scope.product.name) == true) {
            //TODO fix Delete -- currently does not remove record.
            //Update user details and send notifaction
            mvAuth.deleteProduct($scope.product).then(function () {
                mvNotification.notify($scope.product.name + ' has been deleted');
                $location.path('/stock/');
            }, function (reason) {
                mvNotification.error(reason);
            });

        } else {
            $location.path('/stock/item/' + $scope.product._id);
            console.log($scope.product);
        }

    };
});