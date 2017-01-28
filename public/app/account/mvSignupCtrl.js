//Signup form Controller. Gather information from the signup form
//and pass it into our
angular.module('app').controller('mvSignupCtrl', function ($scope, mvUser, mvNotification, mvAuth, $location) {

    $scope.signup = function() {
        var newUserData = {
            username: $scope.email,
            password: $scope.password,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        //Pass in the new user data created from the signup form into a mvAuth function createUser
        mvAuth.createUser(newUserData).then(function() {
            mvNotification.notify('User account created!');
            $location.path('/');
        }, function(reason){
            mvNotification.error(reason);
        })


    }

});