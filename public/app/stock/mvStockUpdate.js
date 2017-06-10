//Auth controller for the user, login/create/logout/auth role

angular.module('app').factory('mvStockUpdate', function ($http, mvIdentity, $q, mvProduct) {
    return {

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

        //delete Product. resource object.
        deleteProduct: function(newProductData){
            var newProduct = new mvProduct(newProductData);
            var dfd = $q.defer();

            //save the new user data against the current user
            newProduct.$delete().then(function() {
                dfd.resolve();
            }, function(response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        },

        //update the CurrentUser settings
        updateProduct: function (updateProductData){

            var dfd = $q.defer();

            var updateProduct = new mvProduct(updateProductData);


            //update taken from our UserResource from mvProduct
            updateProduct.$update().then(function () {
                dfd.resolve();
            }, function (response) {
                dfd.reject(response.data.reason);
            });
            return dfd.promise;
        }
    }
});
