//rotueparams required to get the ID for the Product from the URL
angular.module('app').controller('mvUserDetailsCtrl', function ($scope, mvUser, $routeParams, $location, mvAuth, mvNotification) {

    //Calling get on the Resoruce and passing in and id which is received by the routeParams
    //routeparams id is taken from app.js rooute
    //resoruce is taken id from mvProduct

    //TODO fix this, get back weird array as user.
    $scope.user = mvUser.get({_id:$routeParams.id});

    $scope.editMode = false;

    $scope.editUser = function(){

        $scope.editMode = true;
        console.log($scope.user);

    };

    $scope.cancelUser = function () {
      $scope.editMode = false;
    };

    $scope.saveUser = function () {

        //Update user details and send notifaction
        mvAuth.updateUser($scope.user).then(function () {
            mvNotification.notify($scope.user.firstName + ' ' + $scope.user.lastName + ' has been updated');
            $location.path('/stock/item/' + $scope.user._id);
        }, function (reason) {
            mvNotification.error(reason);
        });


    }


});