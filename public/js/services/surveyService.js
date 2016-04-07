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
  this.show = function(surveyId,callback){
    $http.get('/survey/' + surveyId).success(function(survey){
      callback(survey);
    })
  }
  this.update = function(surveyId,optionName,callback){
    $http.patch('/survey/' + surveyId + '/' + optionName).success(function(survey){
      callback(survey);
    })
  }
  this.remove = function(id,callback){
    $http.get("/delete/" + id).success(function(){
      callback()
    })
  }
}])
