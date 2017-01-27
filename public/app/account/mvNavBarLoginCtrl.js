//Controller for Navbar sign in.
angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotification, mvAuth, $location){

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
                mvNotification.error('Username / Password is incorrect');
            }
        })
    };

    //signout function to signout of the logged in user
    $scope.signout = function(){
        //call logoutUser from mvAuth to logout user
        mvAuth.logoutUser().then(function() {
            //clear username and password and send notify of logout and send user pack to homepage
            $scope.username = "";
            $scope.password = "";
            mvNotification.notify('You have succesfully signed out!');
            $location.path('/');
        })

    }
});