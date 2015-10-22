angular.module("<%= appName %>").controller("TweetsListCtrl", ['$scope', '$meteor',
  function($scope, $meteor){
     $scope.sort = {createdAt: -1};

    $meteor.autorun($scope, function() {
        $meteor.subscribe('tweets', {}, $scope.getReactively('search')).then(function(){
          console.log('Got tweets');
        });
    });

    $scope.tweets = $meteor.collection(function() {
      return Tweets.find({}, {
        sort : $scope.getReactively('sort')
      });
    });

    $scope.add = function(tweet){
      $meteor.call('add', tweet);
    };

    $scope.remove = function(tweet){
       $meteor.call('remove', tweet);
    };

    $scope.update = function(tweet) {
      $meteor.call('update', tweet); 
    };

  }]);
