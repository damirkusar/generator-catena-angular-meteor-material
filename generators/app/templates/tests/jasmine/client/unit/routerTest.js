'use strict';

describe('Root router', function () {
    var rootScope, state, location;

    beforeEach(module('<%= appName %>'));
    // beforeEach(angular.module('ui.router'));
    beforeEach(inject(function ($rootScope, $state, $location) {
        rootScope = $rootScope;
        state = $state;
        location = $location;
    }));

    it('should respond home state', function() {
        expect(state.href('home')).toEqual('/');
    });

    it('init path is correct', function() {
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/");
    });

    it('redirects to otherwise page', function() {
        location.path('/nonExistentPath');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/");
    });

    it('does not redirect to otherwise page', function() {
        location.path('/nonExistentPath');
        expect(location.path()).toBe("/nonExistentPath");
    });
});
