angular.module('<%= appName %>').config(['$stateProvider',
  function($stateProvider){

    $stateProvider
      .state('login', {
        parent: 'root',
        url: '/login',
        templateUrl: 'app/client/users/views/login.ng.html',
        controller: 'LoginCtrl',
        controllerAs: 'ac'
      })
      .state('register',{
        parent: 'root',
        url: '/register',
        templateUrl: 'app/client/users/views/register.ng.html',
        controller: 'RegisterCtrl',
        controllerAs: 'ac'
      })
      .state('forgotpw', {
        parent: 'root',
        url: '/forgotpw',
        templateUrl: 'app/client/users/views/forgot-password.ng.html',
        controller: 'ForgotPasswordCtrl',
        controllerAs: 'ac'
      })
      .state('changepw', {
        parent: 'root',
        url: '/changepw',
        templateUrl: 'app/client/users/views/change-password.ng.html',
        controller: 'ChangePasswordCtrl',
        controllerAs: 'ac',
        resolve: {
          "currentUser": [
            "$meteor", function($meteor){
              return $meteor.requireUser();
          }]
        }
      })
      .state('resetpw', {
        parent: 'root',
        url: '/resetpw/:token',
        templateUrl: 'app/client/users/views/reset-password.ng.html',
        controller: 'ResetPasswordCtrl',
        controllerAs: 'ac'
      })
      .state('logout', {
        parent: 'root',
        url: '/logout',
        resolve: {
          "logout": ['$meteor', '$state', function($meteor, $state) {
            return $meteor.logout().then(function(){
              $state.go('home');
            }, function(err){
              console.log('logout error - ', err);
            });
          }]
        }
      });

  }]);
