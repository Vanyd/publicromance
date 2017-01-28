//Auth controller for the user, login/create/logout/auth role

angular.module('app').factory('mvAuth', function ($http, mvIdentity, $q, mvUser) {
    return {
        authenticateUser: function(username, password) {
            //create deferred for q to login
            var dfd =$q.defer();
            //post to /login route with username and password
            $http.post('/login', {username:username, password:password}).then(function(response){
                //check success response
                if(response.data.success){

                    //create mvUser dependency
                    var user = new mvUser();
                    //passing  in the user
                    angular.extend(user, response.data.user);

                    //changing currentUser identity
                    mvIdentity.currentUser = user;
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

        //create a new user. resource object.
        createUser: function(newUserData){
            var newUser = new mvUser(newUserData);
            var dfd = $q.defer();

            //
            newUser.$save().then(function() {
                mvIdentity.currentUser = newUser;
                dfd.resolve();
            }, function(response) {
                dfd.reject(response.data.reason);
            });
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
        },
        //check if user is authorized to goto route via role
        authorizeCurrentUserForRoute: function(role) {
            if (mvIdentity.isAuthorized(role)) {
                return true;
            } else {
                //reject with message
                return $q.reject('Not Authorized')
            }
        }
    }
});