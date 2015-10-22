Meteor.publish("tweets", function (options, searchString) {
  if(!searchString){
    searchString = '';
  }
  var searchFor = { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' };

  return Tweets.find({
    $and:[
      {
        $or:[
          {
            $and:[
            {public: true},
            {public: {$exists: true}}
          ]},
          {
            $and:[
            {owner: this.userId}
          ]}
        ]
      },
      {
        $or:[
          {message: searchFor}
        ]
      }
    ]
    },
    options);
});
