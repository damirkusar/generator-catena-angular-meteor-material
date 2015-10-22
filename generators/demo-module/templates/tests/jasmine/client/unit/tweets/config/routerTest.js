'use strict';

describe('Tweet router', function () {
    var rootScope,
        state,
        location;

    beforeEach(module('<%= appName %>'));
    beforeEach(inject(function ($rootScope, $state, $location) {
        rootScope = $rootScope;
        state = $state;
        location = $location;
    }));

    it('should respond tweets state', function() {
        expect(state.href('tweets')).toEqual('/tweets');
    });

    it('redirects to tweets page', function() {
        location.path('/tweets');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/tweets");
    });
});
