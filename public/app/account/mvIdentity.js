/*Store that the user is logged in and hold the current user*/
//Allow angular to get bootstrap user via window, allowing user to remain after refresh
angular.module('app').factory('mvIdentity', function($window, mvUser){

    var currentUser;
    //check if bootstrapped user object is available on the window -
    if(!!$window.bootstrappedUserObject) {
        //set current user as new mvUser
        currentUser = new mvUser;
        //passing in the bootstraped user into current user
        angular.extend(currentUser,  $window.bootstrappedUserObject);
    }

    return {
        currentUser: currentUser,
        //adding method to check if authenticated, so can check at any time if we have a logged in user
        isAuthenticated: function () {
            var isAuthenticated = !!this.currentUser;
            return isAuthenticated;
        },
        //check current user role to see if they have it
        isAuthorized: function(role){
            return !! this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }
});