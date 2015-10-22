'use strict';

describe('User router', function () {
    var rootScope,
        state,
        location;

    beforeEach(module('<%= appName %>'));
    beforeEach(inject(function ($rootScope, $state, $location) {
        rootScope = $rootScope;
        state = $state;
        location = $location;
    }));

    it('redirects to login page', function() {
        location.path('/login');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/login");
    });

    it('redirects to register page', function() {
        location.path('/register');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/register");
    });

    it('redirects to forgotpw page', function() {
        location.path('/forgotpw');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/forgotpw");
    });

    it('redirects to changepw page', function() {
        location.path('/changepw');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/changepw");
    });

    it('redirects to resetpw page', function() {
        location.path('/resetpw/12345');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/resetpw/12345");
    });

    it('redirects to home page after without id in path', function() {
        location.path('/resetpw');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/");
    });

    it('redirects to logout page after logout', function() {
        location.path('/logout');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/logout");
    });
});
