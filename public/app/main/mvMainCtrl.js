//main Controller
angular.module('app').controller('mvMainCtrl',function($scope, mvProduct){
    $scope.products = mvProduct.query();
});

