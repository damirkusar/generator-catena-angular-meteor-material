'use strict';

describe('RegisterCtrl', function () {
    var scope, createController, c;


    beforeEach(module('<%= appName %>'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('RegisterCtrl as vm', {
                '$scope': scope
            });
        };
        createController();
        c = scope.vm;
    }));

    it('credentials is correct', function() {
        expect(c.credentials).toEqual({username: '', password: '', email: ''});
    });

    it('error is correct', function() {
        expect(c.error).toEqual('');
    });

    it('register method is defined', function() {
        expect(c.register).toBeDefined();
    });

    describe('Meteor methods called', function(){
      beforeEach(function(){
        c.credentials = {username: 'user', password: 'pw', email: 'mail@mail.com'};
        spyOn(Accounts, 'createUser');
      });

      it('createUser called', function() {
        c.register();
        expect(Accounts.createUser).toHaveBeenCalledWith(c.credentials, jasmine.any(Function));
      });
    });

});
