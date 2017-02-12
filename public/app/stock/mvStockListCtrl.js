angular.module('app').controller('mvStockListCtrl',function ($scope, mvCachedProduct) {
   //Get list of Stock items to use for data table from the mvCachedProduct Resouce
    $scope.products = mvCachedProduct.query();

    //SortOptions array - 0-Title, 1-category
    $scope.sortOptions = [{value:"title", text: "Sort by Title"},
        {value:"category", text: "Sort by Category"}];

    //setting sortOrder to default to first sortOption
    $scope.sortOrder = $scope.sortOptions[0].value;


});