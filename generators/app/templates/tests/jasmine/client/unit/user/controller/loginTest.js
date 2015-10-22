'use strict';

describe('LoginCtrl', function () {
    var scope, createController, c;


    beforeEach(module('<%= appName %>'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('LoginCtrl as vm', {
                '$scope': scope
            });
        };
        createController();
        c = scope.vm;
    }));

    it('credentials is correct', function() {
        expect(c.credentials).toEqual({username: '', password: ''});
    });

    it('error is correct', function() {
        expect(c.error).toEqual('');
    });

    it('login method is defined', function() {
        expect(c.login).toBeDefined();
    });

    describe('Meteor methods called', function(){
      beforeEach(function(){
        c.credentials = {username: 'user', password: 'pass'};
        spyOn(Meteor, 'loginWithPassword');
      });

      it('loginWithPassword called', function() {
        c.login();
        expect(Meteor.loginWithPassword).toHaveBeenCalledWith(c.credentials.username, c.credentials.password, jasmine.any(Function));
      });
    });

});
