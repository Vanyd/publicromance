//Controler for the Profile page.
angular.module('app').controller('mvStockUpdateCtrl',  function($scope, mvAuth, mvProduct, mvNotification, $routeParams){

    //TODO need to figure out how to create a new mv product and feed dat a in.

    $scope.product = mvProduct.get({_id:$routeParams.id});

    $scope.readtest = $scope.product.name;

    $scope.test = function (){
        $scope.tname= $scope.product.name;
        $scope.description = $scope.product.description;
        $scope.tags = $scope.product.tags;
        $scope.category = $scope.product.category;
        $scope.isVintage = $scope.product.isVintage;
        $scope.isAccessory = $scope.product.isAccessory;
        $scope.price = $scope.product.price;
        $scope.quantity = $scope.product.quantity;

        console.log($scope.product);

        console.log($scope.product.name);

        console.log($scope.readtest);
    };

    $timeout($scope.test());



    $scope.update = function() {

        $scope.tname = $scope.product.name;

    // var newProductData ={
    //     name : $scope.product.name,
    //     description : $scope.product.description,
    //     tags : $scope.product.tags,
    //     category : $scope.product.category,
    //     isVintage : $scope.product.isVintage,
    //     isAccessory : $scope.product.isAccessory,
    //     price : $scope.product.price,
    //     quantity : $scope.product.quantity
    // };

    console.log($scope.product);
    console.log($scope.product.name);
    console.log($scope.readtest);

    // //Update user details and send notifaction
    // mvAuth.updateCurrentUser(newProductData).then(function(){
    //     mvNotification.notify('Your account has been updated');
    // }, function(reason){
    //     mvNotification.error(reason);
    // })

}

});