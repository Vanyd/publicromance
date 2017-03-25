//Defining the app module and provides routing throughout the site.

//define angular module
angular.module('app', ['ngResource', 'ngRoute']);

//defining angular routes and location provider
angular.module('app').config(function ($routeProvider, $locationProvider) {

    //Check role for Authorization
    var routeRoleChecks = {
        //checks for admin
        admin: {auth: function (mvAuth) {
                return mvAuth.authorizeCurrentUserForRoute('admin')
            }},
        //checks if
        user: {auth: function (mvAuth) {
                return mvAuth.authorizeAuthenticateUserForRoute()
            }}
        };


    $locationProvider.html5Mode(true);
    $routeProvider
    //route that goes to the root of the domain and define the contoller to handle it.
        .when("/", {
            templateUrl: '/partials/main/main',
            controller:'mvMainCtrl'
        })
        //created route for admin users page and added new controller
        .when("/admin/users", {
            templateUrl: '/partials/admin/user-list',
            controller:'mvUserListCtrl',
            //resolve to check is user authorized for page
            resolve: routeRoleChecks.admin
        })
        //create route for profile page
        .when("/profile", {
            templateUrl: '/partials/account/profile',
            controller:'mvProfileCtrl',
            resolve: routeRoleChecks.user
        })
        //create route for stock page
        .when("/stock", {
            templateUrl: '/partials/stock/stock-list',
            controller:'mvStockListCtrl',
            resolve: routeRoleChecks.admin
        })
        //create route for indvidual stock items, placing the route as the id
        .when("/stock/item/:id", {
            templateUrl: '/partials/stock/stock-details',
            controller:'mvStockDetailsCtrl',
            resolve: routeRoleChecks.admin
        })
        //create route for adding stock items
        .when("/stock/add", {
            templateUrl: '/partials/stock/stock-add',
            controller:'mvStockAddCtrl',
            resolve: routeRoleChecks.admin
        })
        //create route for adding stock items
        .when("/stock/update/:id", {
            templateUrl: '/partials/stock/stock-update',
            controller:'mvStockUpdateCtrl',
            resolve: routeRoleChecks.admin
        })
        //create route for signup page
        .when("/signup", {
            templateUrl: '/partials/account/signup',
            controller:'mvSignupCtrl'
        });
});

//runs section of app module. excuted after the module been completely configured.
//rootScope to listen to route change error events
//location serivce to redirect
angular.module('app').run(function ($rootScope, $location) {
    //turn rootScope on and listen for routeChangeError,
    $rootScope.$on('$routeChangeError', function (evt, current, previous, rejection) {
        //listens for 'Not Authorized error code
        if(rejection === 'Not Authorized')
        {
            //redirects path back to homepage
            $location.path('/');
        }
    })
});