//Controler for the Profile page.
angular.module('app').controller('mvStockUpdateCtrl', function ($scope, mvStockUpdate, mvProduct, mvCategory, mvNotification, $routeParams, $location) {



    //TODO need to loop through array of objects to get name.
    // $scope.category = mvCategory.query();
    //
    // $scope.categories = [];
    //
    // for (var key in $scope.category)
    // {
    //     if ($scope.category.hasOwnProperty(key))
    //     {
    //         // here you have access to each object in category
    //         console.log($scope.category[key])
    //
    //
    //     }
    // }

   //  var cLen, i;
   //  $scope.category = mvCategory.query();
   //
   //  cLen = category.name.length;
   //  for (i = 0; i < cLen; i++) {
   //      $scope.categories.push(category.name[i]);
   //  }


   // $scope.categories = ["Army Shirts", "Dress", "Pants", "Shoes", "Sweater", "Skirt"];


    $scope.categories = mvCategory;

    $scope.product = mvProduct.get({_id: $routeParams.id});

    $scope.update = function () {

        //Update user details and send notifaction
        mvStockUpdate.updateProduct($scope.product).then(function () {
            mvNotification.notify($scope.product.name + ' has been updated');
            $location.path('/stock/item/' + $scope.product._id);
        }, function (reason) {
            mvNotification.error(reason);
        });


    };

    $scope.addCategory = function () {

         var newCategory = prompt("Enter a value");
         mvCategory.push(newCategory);

    };

    $scope.test = function () {
        console.log($scope.category);

    }

});
