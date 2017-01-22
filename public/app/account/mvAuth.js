//Auth controller to login.

angular.module('app').factory('mvAuth', function ($http, mvIdentity, $q) {
    return {
        authenticateUser: function(username, password) {
            //create deferred for q to login
            var dfd =$q.defer();
            //post to /login route with username and password
            $http.post('/login', {username:username, password:password}).then(function(response){
                //check success response
                if(response.data.success){
                    //changing currentUser identity
                    mvIdentity.currentUser = response.data.user;
                    //resolving deferred when loggedin
                    dfd.resolve(true);
                } else {
                    //return false when unsuccesful login
                    dfd.resolve(false);
                }
            });
            //return promise at end
            return dfd.promise;
        },
        //create logout function to logout user
        logoutUser: function() {
            var dfd = $q.defer();
            //posting to server, sending logout proerty to true
            $http.post('/logout', {logout:true}).then(function() {
                //set currentUser to undefeined
                mvIdentity.currentUser = undefined;
                dfd.resolve();
            });
            return dfd.promise
        }
    }
});