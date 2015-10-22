'use strict';

describe('Tweets methods', function () {
    var tweet;

    describe('valid user', function(){
      beforeEach(function(){
        tweet = {message: "Test Tweet", public: true, owner: '1'}
        spyOn(Meteor, 'userId').and.returnValue('1');
        spyOn(Meteor, 'user').and.returnValue({username: 'test-user'});
        spyOn(Tweets, 'insert');
        spyOn(Tweets, 'remove');
        spyOn(Tweets, 'update');
      });

      afterEach(function() {
      });

      it("should add a new tweet", function () {
          Meteor.call('add', tweet);
          expect(Tweets.insert).toHaveBeenCalled();
      });

      it("should remove a tweet", function () {
        Meteor.call('remove', tweet);
        expect(Tweets.remove).toHaveBeenCalled();
      });

      it("should update a tweet", function () {
        var tweetInDb = Tweets.findOne();
        var updatedTweet = tweetInDb;
        updatedTweet.message = 'Message updated';

        Meteor.call('update', updatedTweet);
        expect(Tweets.update).toHaveBeenCalled();
      });
  });

  describe('no valid user', function () {
      var tweet;
      beforeEach(function(){
        tweet = {message: "Test Tweet", public: true, owner: '1'}
        spyOn(Meteor, 'userId').and.returnValue(null);
        spyOn(Meteor, 'user').and.returnValue({username: 'test-user'});
        spyOn(Tweets, 'insert');
        spyOn(Tweets, 'remove');
        spyOn(Tweets, 'update');
      });

      it("should add a new tweet", function () {
          expect(function(){
            Meteor.call('add', tweet);
          }).toThrow();
      });

      it("should remove a tweet", function () {
        expect(function(){
          Meteor.call('remove', tweet);
        }).toThrow();
      });

      it("should update a tweet", function () {
        var tweetInDb = Tweets.findOne();
        var updatedTweet = tweetInDb;
        updatedTweet.message = 'Message updated';

        expect(function(){
          Meteor.call('update', updatedTweet);
        }).toThrow();
      });
  });

});
