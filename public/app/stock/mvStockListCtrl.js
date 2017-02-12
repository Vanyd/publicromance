angular.module('app').controller('mvStockListCtrl',function ($scope, mvProduct) {
   //Get list of Stock items to use for data table from the mvProduct Resouce
    $scope.products = mvProduct.query();

    //
    $scope.sortOptions = [{value:"title", text: "Sort by Title"},
        {value:"category", text: "Sort by Category"}];

    //setting sortOrder to default to first sortOption
    $scope.sortOrder = $scope.sortOptions[0].value;


});