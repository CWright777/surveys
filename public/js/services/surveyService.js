angular.module('surveyService', []).service('Survey', ['$http', function($http){
  this.create = function(newPost,callback){
    $http.post('/survey', newPost).success(function(){
      callback();
    })
  }
  this.index = function(callback){
    $http.get('/survey').success(function(surveys){
      callback(surveys)
    })
  }
}])
