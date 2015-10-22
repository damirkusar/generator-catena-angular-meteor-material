'use strict';

describe('TweetsListCtrl', function () {
    var scope, createController;

    beforeEach(module('<%= appName %>'));
    beforeEach(inject(function ($rootScope, $controller) {
        scope = $rootScope.$new();
        createController = function() {
            return $controller('TweetsListCtrl', {
                '$scope': scope
            });
        };
        createController();
    }));

    it('sort scope is correct', function() {
        expect(scope.sort).toEqual({createdAt: -1});
    });

    it('add method is defined', function() {
        expect(scope.add).toBeDefined();
    });

    it('remove method is defined', function() {
        expect(scope.remove).toBeDefined();
    });

    it('update method is defined', function() {
        expect(scope.update).toBeDefined();
    });

    describe('Meteor methods called', function(){
      var tweet;
      beforeEach(function(){
        tweet = {message: "Test Tweet", public: true}
        spyOn(Meteor, 'call');
      });

      it('add called', function() {
        scope.add(tweet);
        expect(Meteor.call).toHaveBeenCalledWith('add', (tweet), jasmine.any(Function));
      });

      it('update called', function() {
        scope.update(tweet);
        expect(Meteor.call).toHaveBeenCalledWith('update', (tweet), jasmine.any(Function));
      });

      it('remove called', function() {
        scope.remove(tweet);
        expect(Meteor.call).toHaveBeenCalledWith('remove', (tweet), jasmine.any(Function));
      });
    });
});
