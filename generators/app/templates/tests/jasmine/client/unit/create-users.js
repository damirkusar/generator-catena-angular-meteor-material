Meteor.startup(function () {
  if (Meteor.users.find({username: 'test-user'}).count() === 0) {
    Accounts.createUser({username: 'test-user', email:'test-user@test.com', password: 'test-user'});
  }
});
