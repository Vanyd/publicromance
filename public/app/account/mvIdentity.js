/*Store that the user is logged in and hold the current user*/
//Allow angular to get bootstrap user via window, allowing user to remain after refresh
angular.module('app').factory('mvIdentity', function($window){

    var currentUser;
    //check if bootstrapped user object is available on the window
    if(!!$window.bootstrappedUserObject) {
        //if so set currentUser to it
        currentUser = $window.bootstrappedUserObject;
    }

    return {
        currentUser: currentUser,
        //adding method to check if authenticated, so can check at any time if we have a logged in user
        isAuthenticated: function () {
            return !!this.currentUser;
        }
    }
});