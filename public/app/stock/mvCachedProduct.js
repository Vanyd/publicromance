//mvCachedProduct
angular.module('app').factory('mvCachedProduct', function (mvProduct) {
    var productList;

    return {
        //query to check if productlist is defined, if not add mvProduct
        query:function(){
            if(!productList){
                productList = mvProduct.query();
            }

            return productList;
        }
    }
})