var mongoose = require('mongoose');

var SurveysSchema = new mongoose.Schema({
  user: String,
  question: String,
  option1: [String,Number],
  option2: [String,Number],
  option3: [String,Number],
  option4: [String,Number],
  created_at: { type: Date, default: Date.now }
})

var Survey = mongoose.model('Survey', SurveysSchema);

