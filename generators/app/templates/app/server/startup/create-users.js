Meteor.startup(function () {
  if (Meteor.users.find({username: 'admin'}).count() === 0) {
    Accounts.createUser({username: 'admin', email:'admin@admin.ch', password: 'admin'});
  }
});
