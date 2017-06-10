 angular.module('app').controller('mvStockListCtrl',function ($scope, mvProduct, mvStockUpdate, $location, mvNotification) {
   //Get list of Stock items to use for data table from the mvCachedProduct Resouce
    $scope.products = mvProduct.query();

    //SortOptions array - 0-Title, 1-category
    $scope.sortOptions = [{value:"title", text: "Sort by Title"},
        {value:"category", text: "Sort by Category"}];

    //setting sortOrder to default to first sortOption
    $scope.sortOrder = $scope.sortOptions[0].value;

    $scope.addStoreQuantity = function(productData) {

        productData.quantity.store ++;

        mvStockUpdate.updateProduct(productData).then(function () {
            mvNotification.notify(productData.name + ' has been updated');
        }, function (reason) {
            mvNotification.error(reason);
            productData.quantity.store --;
        });
    };


    $scope.removeStoreQuantity = function(productData) {

        // Remove quantity
        productData.quantity.store --;

        mvStockUpdate.updateProduct(productData).then(function () {
            mvNotification.notify(productData.name + ' has been updated');
        }, function (reason) {
            mvNotification.error(reason);
            productData.quantity.store ++;
        });
    };

    $scope.addWarehouseQuantity = function(productData) {

        productData.quantity.warehouse ++;

        mvStockUpdate.updateProduct(productData).then(function () {
            mvNotification.notify(productData.name + ' has been updated');
        }, function (reason) {
            mvNotification.error(reason);
            productData.quantity.warehouse --;
        });
    };


    $scope.removeWarehouseQuantity = function(productData) {

        // Remove quantity
        productData.quantity.warehouse --;

        mvStockUpdate.updateProduct(productData).then(function () {
            mvNotification.notify(productData.name + ' has been updated');
        }, function (reason) {
            mvNotification.error(reason);
            productData.quantity.warehouse ++;
        });
    }
});