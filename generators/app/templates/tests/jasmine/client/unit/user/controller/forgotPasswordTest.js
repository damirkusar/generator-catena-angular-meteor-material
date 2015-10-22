'use strict';

describe('ForgotPasswordCtrl', function () {
    var scope, createController, c;


    beforeEach(module('<%= appName %>'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('ForgotPasswordCtrl as vm', {
                '$scope': scope
            });
        };
        createController();
        c = scope.vm;
    }));

    it('credentials is correct', function() {
        expect(c.credentials).toEqual({email: ''});
    });

    it('error is correct', function() {
        expect(c.error).toEqual('');
    });

    it('reset method is defined', function() {
        expect(c.reset).toBeDefined();
    });

    describe('Meteor methods called', function(){
      beforeEach(function(){
        c.credentials = {email: 'mail@mail.com'};
        spyOn(Accounts, 'forgotPassword');
      });

      it('forgotPassword called', function() {
        c.reset();
        expect(Accounts.forgotPassword).toHaveBeenCalledWith(c.credentials, jasmine.any(Function));
      });
    });

});
