const mongoose = require('mongoose');

const profileSchema = mongoose.Schema({
  username: String,
  email: {
    type: String,
    required:true,
    unique:true,
    trim:true,
    minlength:3
  },
  password: String,
  token: String,
  bio: String,
  cv:  String,
  github: String,
  linkedin: String,
  portfolio: String,
  available: Boolean,
  location: String,
  picture: String,
  skills: Array,
},
{
  timestamps:true
})

module.exports.Profile = mongoose.model('Profile', profileSchema)