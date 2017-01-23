//User list Contoller. Display a List of Users for the Admin role
angular.module('app').controller('mvUserListCtrl', function ($scope, mvUser) {
    //query wll grab a list of users and put it on the scope
    $scope.users = mvUser.query();
});
