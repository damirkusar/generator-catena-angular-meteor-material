Tweets = new Mongo.Collection("tweets");

Meteor.methods({
  add: function (tweet) {
    if (!Meteor.userId()) {
      throw new Meteor.Error('not-authenticated');
    }

    tweet.owner = Meteor.userId();
    tweet.username = Meteor.user().username;
    tweet.createdAt = new Date();

    Tweets.insert(tweet);
  },
  remove: function (tweet) {
    if (tweet.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Tweets.remove(tweet._id);
  },
  update: function (updatedTweet) {
    var tweet = Tweets.findOne(updatedTweet._id);
    if (tweet.owner !== Meteor.userId()) {
      throw new Meteor.Error('not-authorized');
    }
    Tweets.update(tweet._id, {$set: {message: updatedTweet.message, public: updatedTweet.public} });
  }
});
