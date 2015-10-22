angular.module('<%= appName %>').config(['$stateProvider',
  function($stateProvider){

    $stateProvider
      .state('<%= moduleNameDeCap %>', {
        parent: 'root',
        url: '/<%= moduleNameDeCap %>',
        templateUrl: 'app/client/<%= moduleNameDeCap %>/views/module.ng.html',
        controller: '<%= moduleNameDeCap %>Ctrl'
      });
  }]);
