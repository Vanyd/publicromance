angular.module('app').controller('mvStockListCtrl',function ($scope, mvStock) {
   //Get list of Stock items to use for data table
    $scope.stockes = mvStock.query();
})