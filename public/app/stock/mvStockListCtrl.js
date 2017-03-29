angular.module('app').controller('mvStockListCtrl',function ($scope, mvProduct, mvAuth, $location) {
   //Get list of Stock items to use for data table from the mvCachedProduct Resouce
    $scope.products = mvProduct.query();

    //SortOptions array - 0-Title, 1-category
    $scope.sortOptions = [{value:"title", text: "Sort by Title"},
        {value:"category", text: "Sort by Category"}];

    //setting sortOrder to default to first sortOption
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.addQuantity = function(productData) {

        productData.quantity ++;

        //
        // mvAuth.addQuantityProduct(productData).then(function() {
        //     mvNotification.notify('Stock Item Created');
        //     $location.path('/stock');
        // }, function(reason){
        //     mvNotification.error(reason);
        // })


    };


    $scope.removeQuantity = function(productData) {

       // alert(productID);

        productData.quantity --;



        // mvAuth.removeQuantityProduct(currentProductID).then(function() {
        //     mvNotification.notify('User account created!');
        //     $location.path('/');
        // }, function(reason){
        //     mvNotification.error(reason);
        // })



    }

});