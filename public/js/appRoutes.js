angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:'views/login.html',
    controller: 'usersController'
  })

}]);
