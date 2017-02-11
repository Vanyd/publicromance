angular.module('app').controller('mvStockListCtrl',function ($scope, mvProduct) {
   //Get list of Stock items to use for data table from the mvProduct Resouce
    $scope.products = mvProduct.query();
});