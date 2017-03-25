angular.module('app').controller('mvStockAddCtrl', function ($scope, mvProduct, mvNotification, mvAuth, $location) {

    $scope.addstock = function() {
        var newProductData = {
            name: $scope.email,
            description: $scope.description,
            tags: $scope.tags,
            category: $scope.category,
            isVintage: $scope.isVintage,
            isAccessory: $scope.isAccessory,
            price: $scope.price,
            quantity: $scope.quantity
        };

        //Pass in the new user data created from the signup form into a mvAuth function createUser
        //TODO createProduct function in mvAuth
        mvAuth.createProduct(newProductData).then(function() {
            mvNotification.notify('Stock Item Created');
            $location.path('/stock');
        }, function(reason){
            mvNotification.error(reason);
        })


    }

});