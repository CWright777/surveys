angular.module('usersCtrl', []).controller('usersController', function($scope,User,$cookies,$location){
  $scope.addUser = function(){
    User.create($scope.newUser, function(userId){
      $cookies.name = $scope.newUser.name
      $cookies.userId = userId
      $location.path('/Somewhere/' + userId);
    })
  }
})
