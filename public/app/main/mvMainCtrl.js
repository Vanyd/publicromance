//main Controller
angular.module('app').controller('mvMainCtrl',function($scope, mvCachedProduct){
    $scope.products = mvCachedProduct.query();
});

