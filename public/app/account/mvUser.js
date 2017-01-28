//Determing a Users Role. Gets called upon from mvIdentity and mvAuth

angular.module('app').factory('mvUser', function ($resource) {
    //The `ngResource` module provides interaction support with RESTful services via the $resource service.
    var UserResource = $resource('/api/users/:id', {_id: "@id"});

    //method to tell whether user is admin
    UserResource.prototype.isAdmin = function () {
        return this.roles && this.roles.indexOf('admin') > -1;
    };
    return UserResource;
});