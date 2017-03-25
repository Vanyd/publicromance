//Resource to get the Stock file list

angular.module('app').factory('mvProduct', function ($resource) {

    //Similar to the mvUser we use the resource to grab the stock items
    var ProductResource = $resource('/api/stock/:_id',{_id:"@id"},{
        update: {method:'PUT', isArray:false}
    });

    return ProductResource;

    var currentProduct = new this;



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
            console.log("isAuth: " + isAuthenticated);
            return isAuthenticated;
        },
        //check current user role to see if they have it
        isAuthorized: function(role){
            return !! this.currentUser && this.currentUser.roles.indexOf(role) > -1;
        }
    }

});