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
  username: String,
   token: String
},
{
  timestamps:true,
})

module.exports.User = mongoose.model('User', userSchema)