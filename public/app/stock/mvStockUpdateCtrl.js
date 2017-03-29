//Controler for the Profile page.
angular.module('app').controller('mvStockUpdateCtrl', function ($scope, mvAuth, mvProduct, mvNotification, $routeParams, $location) {

    //TODO need to figure out how to create a new mv product and feed data in.

    $scope.product = mvProduct.get({_id: $routeParams.id});

    $scope.deleteProduct = function () {
        var x;
        if (confirm("Are you sure you want to delete" + $scope.product.name) == true) {
            //TODO Colum to add RESTFUL APIS
            x = "You pressed OK!";
        } else {
            $location.path('/stock/item/' + $scope.product._id);
        }

    };


    $scope.update = function () {


        console.log($scope.product);

        //Update user details and send notifaction
        mvAuth.updateProduct($scope.product).then(function () {
            mvNotification.notify($scope.product.name + ' has been updated');
            $location.path('/stock/item/' + $scope.product._id);
        }, function (reason) {
            mvNotification.error(reason);
        });


    }

});
