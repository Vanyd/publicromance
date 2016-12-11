//Defining the app module and provides routing throughout the site.

//define anfular module
angular.module('app', ['ngResource', 'ngRoute']);

//defining angular routes and location provider
angular.module('app').config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
    //route that goes to the root of the domain and define the contoller to handle it.
        .when("/", {
            templateUrl: '/partials/main',
            controller:'mainCtrl'
        });
});


//main Controller
angular.module('app').controller('mainCtrl',function($scope){
    $scope.myVar = "Hello Angular";
});