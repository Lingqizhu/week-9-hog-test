const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  email: {
    type: String,
    required:true,
    unique:true,
    trim:true,
    minlength:3
  },
  password: String,
  role: {
    type: String,
    default:"participant"},
  token: String,
  username: String,
},
{
  timestamps:true,
})

module.exports.User = mongoose.model('User', userSchema)