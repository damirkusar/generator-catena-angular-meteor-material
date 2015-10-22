'use strict';

describe('<%= moduleNameDeCap %> router', function () {
    var rootScope,
        state,
        location;

    beforeEach(module('<%= appName %>'));
    beforeEach(inject(function ($rootScope, $state, $location) {
        rootScope = $rootScope;
        state = $state;
        location = $location;
    }));

    it('should respond <%= moduleNameDeCap %> state', function() {
        expect(state.href('<%= moduleNameDeCap %>')).toEqual('/<%= moduleNameDeCap %>');
    });

    it('redirects to <%= moduleNameDeCap %> page', function() {
        location.path('/<%= moduleNameDeCap %>');
        rootScope.$emit("$locationChangeSuccess");
        expect(location.path()).toBe("/<%= moduleNameDeCap %>");
    });
});
