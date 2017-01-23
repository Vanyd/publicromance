//test script to test mvUser

//using a describe function, which is part of Jasmine

//using the mvUser
describe('mvUser', function() {
    beforeEach(module('app'));

    //Describing the 'isAdmin' service and testing admin and non admin users
    describe('isAdmin', function() {
        it('should return false if the roles array does not have an admin entry', inject(function(mvUser) {
            var user = new mvUser();
            user.roles = ['not admin'];
            expect(user.isAdmin()).to.be.falsey;
        }));
        it('should return true if the roles array has an admin entry', inject(function(mvUser) {
            var user = new mvUser();
            user.roles = ['admin'];
            expect(user.isAdmin()).to.be.true;
        }));
    })
});