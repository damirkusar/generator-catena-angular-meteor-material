angular.module("<%= appName %>").controller("<%= moduleNameDeCap %>Ctrl", ['$scope', '$meteor',
  function($scope, $meteor){
     $scope.sort = {createdAt: -1};

  }]);
