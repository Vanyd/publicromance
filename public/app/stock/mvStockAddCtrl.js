angular.module('app').controller('mvStockAddCtrl', function ($scope, mvNotification, mvCategory, mvStockUpdate, $location) {


    $scope.categories = mvCategory;

    $scope.addstock = function() {
        var newProductData = {
            name: $scope.name,
            description: $scope.description,
            category: $scope.category,
            isVintage: $scope.isVintage,
            isAccessory: $scope.isAccessory,
            retailprice: $scope.retailprice,
            costprice: $scope.costprice,
            quantity: {
                warehouse: $scope.warehousequantity,
                store: $scope.storequantity
            }
        };

        //Pass in the new user data created from the signup form into a mvAuth function createUser
        mvStockUpdate.createProduct(newProductData).then(function() {
            mvNotification.notify('Stock Item Created');
            $location.path('/stock');
        }, function(reason){
            mvNotification.error(reason);
        })


    },

    $scope.addCategory = function () {

        var newCategory = prompt("Enter a value");
        mvCategory.push(newCategory);

    };

});