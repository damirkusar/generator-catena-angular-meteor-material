angular.module("<%= appName %>").controller("<%= moduleNameDeCap %>Ctrl", ['$scope', '$meteor',
  function($scope, $meteor){
     $scope.sort = {createdAt: -1};

    $meteor.autorun($scope, function() {
        $meteor.subscribe('<%= moduleNameDeCap %>', {}, $scope.getReactively('search')).then(function(){
          console.log('Got <%= moduleName %>');
        });
    });

    $scope.<%= moduleName %> = $meteor.collection(function() {
      return <%= moduleName %>.find({}, {
        sort : $scope.getReactively('sort')
      });
    });

  }]);
