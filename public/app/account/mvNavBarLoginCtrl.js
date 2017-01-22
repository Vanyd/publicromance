//Controller for Navbar sign in.
angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotification, mvAuth){

    //sets identity to mvIdentity, to hide the form
    $scope.identity = mvIdentity;


    //get username and password from signin
    $scope.signin = function(username, password){
        //pass to mvAuth to check if successful
        mvAuth.authenticateUser(username, password).then(function(success){
            if(success){
                //if success send message via mvNotification
                mvNotification.notify('You have successfully signed in!');
            } else {
                mvNotification.notify('Username / Password is incorrect');
            }
        })
    }
});