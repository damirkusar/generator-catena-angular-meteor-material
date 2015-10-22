Meteor.startup(function () {
  if (Tweets.find().count() === 0) {
    var tweets = [
      {
        'message': 'first message',
        public: true,
        owner: '1'
      },
      {
        'message': 'second message',
        public: true,
        owner: '1'
      },
      {
        'message': 'third message',
        public: true,
        owner: '1'
      }
    ];
    for (var i = 0; i < tweets.length; i++)
      Tweets.insert({message: tweets[i].message, public: tweets[i].public, owner: tweets[i].owner});
  }
});
