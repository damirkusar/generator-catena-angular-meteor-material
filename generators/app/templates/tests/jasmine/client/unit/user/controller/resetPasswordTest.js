'use strict';

describe('ResetPasswordCtrl', function () {
    var scope, createController, stateParams, c;


    beforeEach(module('<%= appName %>'));
    beforeEach(inject(function ($rootScope, $controller, $stateParams) {
        scope = $rootScope.$new();
        stateParams = $stateParams;
        stateParams = {token: 123};
        createController = function() {
            return $controller('ResetPasswordCtrl as vm', {
                '$scope': scope,
                '$stateParams' : stateParams
            });
        };
        createController();
        c = scope.vm;
    }));

    it('credentials is correct', function() {
        expect(c.credentials).toEqual({new: ''});
    });

    it('error is correct', function() {
        expect(c.error).toEqual('');
    });

    it('resetPassword method is defined', function() {
        expect(c.resetPassword).toBeDefined();
    });

    describe('Meteor methods called', function(){
      var token;
      beforeEach(function(){
        c.credentials = {new: 'newPW'};
        token = 123;
        spyOn(Accounts, 'resetPassword');
      });

      it('resetPassword called', function() {
        c.resetPassword();
        expect(Accounts.resetPassword).toHaveBeenCalledWith(token, c.credentials.new, jasmine.any(Function));
      });
    });

});
