angular.module('surveysCtrl', []).controller('surveysController', function($scope,User,$cookies,$location,Survey,$routeParams){
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
  $scope.show = function(){
    Survey.show($routeParams.id,function(survey){
      $scope.pickedSurvey = survey
    })
  }
  $scope.show()
  $scope.addVote = function(optionName){
    Survey.update($routeParams.id,optionName,function(survey){
      $scope.pickedSurvey = survey
    })
  }
  $scope.delete = function(id){
    Survey.remove(id,function(){
      $scope.index()
    })
  }
  $scope.currentUser = $cookies.name
  $scope.optionL = 3
})
