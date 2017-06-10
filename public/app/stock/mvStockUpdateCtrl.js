//Controler for the Profile page.
angular.module('app').controller('mvStockUpdateCtrl', function ($scope, mvAuth, mvProduct, mvNotification, $routeParams, $location) {

    $scope.categories = ["Army Shirts", "Dress", "Pants", "Shoes", "Sweater", "Skirt"];

    $scope.product = mvProduct.get({_id: $routeParams.id});

    $scope.update = function () {

        //Update user details and send notifaction
        mvAuth.updateProduct($scope.product).then(function () {
            mvNotification.notify($scope.product.name + ' has been updated');
            $location.path('/stock/item/' + $scope.product._id);
        }, function (reason) {
            mvNotification.error(reason);
        });


    }

});
