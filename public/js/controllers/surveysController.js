angular.module('surveysCtrl', []).controller('surveysController', function($scope,User,$cookies,$location,Survey){
  $scope.index = function(callback){
    Survey.index(function(surveys){
      $scope.surveys = surveys
    })
  }
  $scope.index()
  $scope.addPoll = function(){
    $scope.newPoll.user = $cookies.name
    Survey.create($scope.newPoll,function(){
      $location.path('/dashboard')
    })
  }
})
