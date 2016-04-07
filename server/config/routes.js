var Users = require('../controllers/usersController.js');
var Surveys = require('../controllers/surveysController.js');

module.exports = function(app){
  app.post('/users',function(req,res){
    Users.create(req,res);
  })
  app.post('/survey',function(req,res){
    Surveys.create(req,res);
  })
  app.get('/survey',function(req,res){
    Surveys.index(req,res);
  })
  app.get('/survey/:id',function(req,res){
    Surveys.show(req,res);
  })
  app.patch('/survey/:id/:option',function(req,res){
    Surveys.update(req,res);
  })
  app.get('/delete/:id', function(req,res){
    Surveys.remove(req,res);
  })
};
