 angular.module('app').controller('mvStockListCtrl',function ($scope, mvProduct, mvAuth, $location, mvNotification) {
   //Get list of Stock items to use for data table from the mvCachedProduct Resouce
    $scope.products = mvProduct.query();

    //SortOptions array - 0-Title, 1-category
    $scope.sortOptions = [{value:"title", text: "Sort by Title"},
        {value:"category", text: "Sort by Category"}];

    //setting sortOrder to default to first sortOption
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.addQuantity = function(productData) {

        productData.quantity ++;

        mvAuth.updateProduct(productData).then(function () {
            mvNotification.notify(productData.name + ' has been updated');
        }, function (reason) {
            mvNotification.error(reason);
            productData.quantity --;
        });



    };


    $scope.removeQuantity = function(productData) {

       // alert(productID);

        productData.quantity --;



        mvAuth.updateProduct(productData).then(function () {
            mvNotification.notify(productData.name + ' has been updated');
        }, function (reason) {
            mvNotification.error(reason);
            productData.quantity ++;
        });




    }

});