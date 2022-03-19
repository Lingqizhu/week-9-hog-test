const mongoose = require('mongoose');

const employerSchema = mongoose.Schema({
  name: String,
  industry: String,
  bio: String,
  linkedin: String,
  portfolio: String,
  email:  String,
  location: String,
  picture: String,
  course: String,

})

module.exports.Employer = mongoose.model('Employer', employerSchema)

// var users = mongoose.model('User', loginUserSchema, 'users');
// var registerUser = mongoose.model('Registered', registerUserSchema, 'users');
