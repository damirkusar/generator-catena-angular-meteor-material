Meteor.publish('<%= moduleNameDeCap %>', function (options, searchString) {
  if(!searchString){
    searchString = '';
  }
  
  var searchFor = { '$regex' : '.*' + searchString || '' + '.*', '$options' : 'i' };

  return <%= moduleName %>.find({

  }, options);
});
