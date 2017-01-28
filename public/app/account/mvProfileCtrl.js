//Controler for the Profile page.
angular.module('app').controller('mvProfileCtrl',  function($scope, mvAuth, mvIdentity, mvNotification){
    //get data on the current user
    $scope.email = mvIdentity.currentUser.username;
    $scope.fname = mvIdentity.currentUser.firstName;
    $scope.lname = mvIdentity.currentUser.lastName;

    //update function

    $scope.update = function() {
        var newUserData ={
            username: $scope.email,
            firstName: $scope.fname,
            lastName: $scope.lname
        };

        //check if user has set a new password, if so then set new password
        if($scope.password && $scope.password.length > 0){
            newUserData.password = $scope.password;
        }

        //Update user details and send notifaction
        mvAuth.updateCurrentUser(newUserData).then(function(){
            mvNotification.notify('Your account has been updated');
        }, function(reason){
            mvNotification.error(reason);
        })

    }

});