//Auth controller for the user, login/create/logout/auth role

angular.module('app').factory('mvAuth', function ($http, mvIdentity, $q, mvUser, mvProduct) {
    return {

        //authenticate user against the inputted username and password.
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

            //save the new user data against the current user
            newUser.$save().then(function() {
                mvIdentity.currentUser = newUser;
                dfd.resolve();
            }, function(response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },

        //create a new Product. resource object.
        createProduct: function(newProductData){
            var newProduct = new mvProduct(newProductData);
            var dfd = $q.defer();

            //save the new user data against the current user
            newProduct.$save().then(function() {
                dfd.resolve();
            }, function(response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },

        //update the CurrentUser settings
        updateCurrentUser: function (newUserData){

            var dfd = $q.defer();

            //Creating a clone of the current user, using the angular copy method
            var clone = angular.copy(mvIdentity.currentUser);
            //Copy the newUserData onto the clone
            angular.extend(clone, newUserData);

            //update taken from our UserResource from mvUser
            clone.$update().then(function () {
                mvIdentity.currentUser = clone;
                dfd.resolve();
            }, function (response) {
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
        //check if user is authorized to ga certain role
        authorizeCurrentUserForRoute: function(role) {
            if (mvIdentity.isAuthorized(role)) {
                return true;
            } else {
                //reject with message if user is not part of the role
                return $q.reject('Not Authorized')
            }
        },



        //Check if user is authenticated
        authorizeAuthenticateUserForRoute: function () {
            if(mvIdentity.isAuthenticated()){
                return true;
            } else {
                return $q.reject('Not Authorized')
            }
        }
    }
});