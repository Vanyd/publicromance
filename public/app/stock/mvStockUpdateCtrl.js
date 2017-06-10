//Controler for the Profile page.
angular.module('app').controller('mvStockUpdateCtrl', function ($scope, mvStockUpdate, mvProduct, mvNotification, $routeParams, $location) {




    // TODO fix categories to display
    // var cLen, i;
    // $scope.category = mvCategory.query();
    //
    // $scope.categories = [];
    //
    // cLen = category.name.length;
    // for (i = 0; i < cLen; i++) {
    //     $scope.categories.push(category.name[i]);
    // }


    $scope.categories = ["Army Shirts", "Dress", "Pants", "Shoes", "Sweater", "Skirt"];

    $scope.product = mvProduct.get({_id: $routeParams.id});

    $scope.update = function () {

        //Update user details and send notifaction
        mvStockUpdate.updateProduct($scope.product).then(function () {
            mvNotification.notify($scope.product.name + ' has been updated');
            $location.path('/stock/item/' + $scope.product._id);
        }, function (reason) {
            mvNotification.error(reason);
        });


    }

});
