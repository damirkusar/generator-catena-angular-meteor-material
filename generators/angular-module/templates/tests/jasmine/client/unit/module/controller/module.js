'use strict';

describe('<%= moduleNameDeCap %>Ctrl', function () {
    var scope, createController;

    beforeEach(module('<%= appName %>'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('<%= moduleNameDeCap %>Ctrl', {
                '$scope': scope
            });
        };
        createController();
    }));

    it('sort scope is correct', function() {
        expect(scope.sort).toEqual({createdAt: -1});
    });
});
