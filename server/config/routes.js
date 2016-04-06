var Users = require('../controllers/usersController.js');

module.exports = function(app){
  app.post('/users',function(req,res){
    Users.create(req,res);
  })
};
