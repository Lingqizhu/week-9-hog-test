const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  fname: String,
  sname: String,
  bio: String,
  cv:  String,
  github: String,
  linkedin: String,
  portfolio: String,
  available: Boolean,
  email:  String,
  location: String,
  picture: String
})

module.exports.Data = mongoose.model('Data', userSchema, 'Data')