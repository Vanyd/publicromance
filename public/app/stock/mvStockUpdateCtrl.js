//Controler for the Profile page.
angular.module('app').controller('mvStockUpdateCtrl',  function($scope, mvAuth, mvProduct, mvNotification, $routeParams){


    $scope.product = mvProduct.get({_id:$routeParams.id});


    $scope.name = $scope.product.name;
    $scope.description = $scope.product.description;
    $scope.tags = $scope.product.tags;
    $scope.category = $scope.product.category;
    $scope.isVintage = $scope.product.isVintage;
    $scope.isAccessory = $scope.product.isAccessory;
    $scope.price = $scope.product.price;
    $scope.quantity = $scope.product.quantity;


    //TODO Create a MvIdentity for Product to hold current product information

  $scope.qwerty = function () {

      alert($scope.name);

  };

    //update function

    $scope.update = function() {



        var newProductData ={
            name : $scope.name,
            description : $scope.description,
            tags : $scope.tags,
            category : $scope.category,
            isVintage : $scope.isVintage,
            isAccessory : $scope.isAccessory,
            price : $scope.price,
            quantity : $scope.quantity
        };


        // //Update user details and send notifaction
        // mvAuth.updateCurrentUser(newProductData).then(function(){
        //     mvNotification.notify('Your account has been updated');
        // }, function(reason){
        //     mvNotification.error(reason);
        // })

    }

});