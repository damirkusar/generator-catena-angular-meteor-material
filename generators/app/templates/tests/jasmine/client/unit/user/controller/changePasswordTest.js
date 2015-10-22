'use strict';

describe('ChangePasswordCtrl', function () {
    var scope, createController, c;


    beforeEach(module('<%= appName %>'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('ChangePasswordCtrl as vm', {
                '$scope': scope
            });
        };
        createController();
        c = scope.vm;
    }));

    it('credentials is correct', function() {
        expect(c.credentials).toEqual({old: '', new: ''});
    });

    it('error is correct', function() {
        expect(c.error).toEqual('');
    });

    it('changePassword method is defined', function() {
        expect(c.changePassword).toBeDefined();
    });

    describe('Meteor methods called', function(){
      beforeEach(function(){
        c.credentials = {old: 'old', new: 'new'};
        spyOn(Accounts, 'changePassword');
      });

      it('changePassword called', function() {
        c.changePassword();
        expect(Accounts.changePassword).toHaveBeenCalledWith(c.credentials.old, c.credentials.new, jasmine.any(Function));
      });
    });

});
