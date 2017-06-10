//User list Contoller. Display a List of Users for the Admin role
angular.module('app').controller('mvUserListCtrl', function ($scope, mvUser, mvAuth) {
    //query wll grab a list of users and put it on the scope
    $scope.users = mvUser.query();


    //TODO FIX ADD ADMIN FUNCTIONALITY

    $scope.addAdmin = function(updateUserData) {

        updateUserData.roles.push("admin");

        mvAuth.updateUser(updateUserData).then(function () {
            mvNotification.notify(updateUserData.firstName + ' ' + updateUserData.lastName + ' has been updated');
        }, function (reason) {
            mvNotification.error(reason);
        });
    };

    $scope.removeAdmin = function(updateUserData) {

        updateUserData.roles.pop();

        mvAuth.updateUser(updateUserData).then(function () {
            mvNotification.notify(updateUserData.firstName + ' ' + updateUserData.lastName + ' has been updated');
        }, function (reason) {
            mvNotification.error(reason);
        });
    };



});
