var mongoose = require('mongoose');

var Survey = mongoose.model('Survey');

module.exports = {
  index: function(req,res){
    Survey.find({},function(err,surveys){
      res.json(surveys);
    })
  },
  show: function(req,res){
    Survey.findOne({_id: req.params.id}, function(err,survey){
      res.json(survey);
    })
  },
  create: function(req,res){
    var newSurvey = new Survey({
      user: req.body.user,
      question: req.body.question,
      option1: [req.body.option1,0],
      option2: [req.body.option2,0],
      option3: [req.body.option3,0],
      option4: [req.body.option4,0]
    })
    newSurvey.save(function(err){
      if(err){
        console.log(err);
      } else {
        res.json()
        console.log('yay')
      }
    })
  }
}
