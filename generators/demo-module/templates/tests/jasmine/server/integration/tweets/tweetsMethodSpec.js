'use strict';

describe('Tweets methods', function () {
    var tweet;

    describe('valid user', function(){
      beforeEach(function(){
        tweet = {message: "Test Tweet", public: true, owner: '1'}
        spyOn(Meteor, 'userId').and.returnValue('1');
        spyOn(Meteor, 'user').and.returnValue({username: 'test-user'});
      });

      afterEach(function() {
        if(Tweets.find().count() > 3){
          var tweet = Tweets.findOne();
          Tweets.remove(tweet._id);
        }
        // Tweets.remove({});
      });

      it("db should be prepopulated with tweets", function () {
          expect(Tweets.find().count()).toBe(3);
      });

      it("should add a new tweet", function () {
          Meteor.call('add', tweet);
          expect(Tweets.find().count()).toBe(4);
      });

      it("should remove a tweet", function () {
        Meteor.call('remove', tweet);
        expect(Tweets.find().count()).toBe(3);
      });

      it("should update a tweet", function () {
        var tweetInDb = Tweets.findOne();
        var updatedTweet = tweetInDb;
        updatedTweet.message = 'Message updated';

        Meteor.call('update', updatedTweet);
        var returnedTweet = Tweets.find({message: 'Message updated'});
        expect(returnedTweet.count()).toBe(1);
      });
    });

    describe('no valid user', function () {
        var tweet;
        beforeEach(function(){
          tweet = {message: "Test Tweet", public: true, owner: '1'}
          spyOn(Meteor, 'userId').and.returnValue(null);
          spyOn(Meteor, 'user').and.returnValue({username: 'test-user'});
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
