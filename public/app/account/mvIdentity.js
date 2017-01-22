/*Store that the user is logged in and hold the current user*/

angular.module('app').factory('mvIdentity', function(){

    return {
        currentUser: undefined,
        //adding method to check if authenticated, so can check at any time if we have a logged in user
        isAuthenticated: function () {
            return !!this.currentUser;
        }
    }
});