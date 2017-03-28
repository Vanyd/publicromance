//Controler for the Profile page.
angular.module('app').controller('mvStockUpdateCtrl',  function($scope, mvAuth, mvProduct, mvNotification, $routeParams){

    //TODO need to figure out how to create a new mv product and feed data in.

    $scope.product = mvProduct.get({_id:$routeParams.id});


    $scope.pname = "test";
    $scope.pd = $scope.product.description;
    $scope.pc = $scope.product.category;
    $scope.vin = $scope.product.isVintage;
    $scope.acc = $scope.product.isAccessory;
    $scope.cost = $scope.product.price;
    $scope.quan = $scope.product.quantity;


    $scope.update = function() {


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
    console.log($scope.pname);
    console.log($scope.pd);

    // //Update user details and send notifaction
    // mvAuth.updateCurrentUser(newProductData).then(function(){
    //     mvNotification.notify('Your account has been updated');
    // }, function(reason){
    //     mvNotification.error(reason);
    // })

}

});