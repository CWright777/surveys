angular.module('appRoutes', []).config(['$routeProvider', function($routeProvider) {
  $routeProvider

  .when('/', {
    templateUrl:'views/login.html',
    controller: 'usersController'
  })
  .when('/dashboard', {
    templateUrl:'views/dashboard.html',
    controller: 'surveysController'
  })
  .when('/new', {
    templateUrl:'views/new.html',
    controller: 'surveysController'
  })

}]);
